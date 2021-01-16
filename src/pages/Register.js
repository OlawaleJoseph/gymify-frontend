/* eslint-disable func-names */
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, connect } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import FormContainer from '../containers/FormContainer';
import Form from '../components/Form';
import { authFail, authStart, authSuccess } from '../reducers/auth';
import { getHeaders, storeHeaders } from '../utils/common';
import DefaultUserImage from '../assets/images/user.png';
import '../scss/Register.scss';
import { postRequest } from '../utils/api';
import { signUpPath } from '../utils/constants';

const SUPPORTED_FORMATS = ['image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png'];

const FILE_SIZE = 200 * 1024;

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required').min(3, 'First Name must have at least 3 characters').max(50, 'First name must not exceed 50 characters')
    .matches(/^([^0-9]*)$/, 'First name must contain only alphabets'),

  lastName: yup.string().required('Last Name is required').min(3, 'Last Name must have at least 3 characters').max(50, 'Last Name must not exceed 50 characters')
    .matches(/^([^0-9]*)$/, 'Last Name must contain only alphabets'),

  email: yup.string().email('Invalid email').required('Email is required'),

  isTrainer: yup.boolean().required(),

  username: yup.string().required('Username is required').min(3, 'Username must have at least 3 characters').max(50, 'Username must not exceed 50 characters'),

  speciality: yup.string()
    .when('isTrainer', {
      is: isTrainer => !!isTrainer,
      then: yup.string().required('Speciality is required').min(3, 'Speciality must have at least 3 characters').max(50, 'Speciality must not exceed 50 characters'),
    }),

  info: yup.string()
    .when('isTrainer', {
      is: isTrainer => !!isTrainer,
      then: yup.string().required('Info is required').min(3, 'Info must have at least 3 characters').max(5000, 'Info must not exceed 5000 characters'),
    }),

  image: yup.mixed()
    .when('isTrainer', {
      is: isTrainer => !!isTrainer,
      then: yup.mixed().required('Avatar is required'),
      otherwise: yup.mixed()
        .test(
          'fileSize',
          'File too large',
          value => !value[0] || (value[0] && value[0]?.size <= FILE_SIZE),
        )
        .test(
          'fileFormat',
          'Unsupported Format',
          value => !value[0] || (value && SUPPORTED_FORMATS.includes(value[0]?.type)),
        ),
    }),

  password: yup.string().required('Password is required').min(6, 'Password must have at least 6 characters').matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    'Password must have at least one uppercase, lowercase, and digit',
  ),

  confirmPassword: yup.string().required('Confirm password is required').test('passwords-match', 'Passwords do not match', function (value) { return this.parent.password === value; }),
});

export const Register = () => {
  const headers = getHeaders();
  if (headers && Object.keys(headers).length) return <Redirect to="/dashboard" />;

  const dispatch = useDispatch();
  const history = useHistory();
  const { handleSubmit, errors, register } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const dataUrlToFile = async (dataUrl, fileName) => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
  };

  const handleFormSubmit = async data => {
    const {
      firstName, lastName, email, password, username, isTrainer, image, speciality, info,
    } = data;

    const userData = new FormData();

    userData.append('first_name', firstName);
    userData.append('last_name', lastName);
    userData.append('email', email);
    userData.append('password', password);
    userData.append('username', username);
    userData.append('is_trainer', isTrainer);
    userData.append('first_name', firstName);
    if (isTrainer) {
      userData.append('speciality', speciality);
      userData.append('info', info);
    }

    try {
      const imgFile = await dataUrlToFile(DefaultUserImage, 'defaultImage');
      if (!image[0]) {
        userData.append('image', imgFile);
      }
      dispatch(authStart());

      const { data, headers } = await postRequest(signUpPath, userData, { 'Content-Type': 'multipart/form-data' });
      const {
        uid, client, authorization, expiry,
      } = headers;

      const tokenType = headers['token-type'];
      storeHeaders({
        uid, client, authorization, expiry, tokenType,
      });

      dispatch(authSuccess(data.data));
      history.push('/dashboard');
      toast.success('Account created successfully');
    } catch (error) {
      dispatch(authFail('Error Occured'));
      if (error.response.status === 422) {
        error.response.data.errors.full_messages.forEach(msg => toast.error(msg));
      } else {
        toast.error('Server error. Plaease try again later');
      }
    }
  };
  return (
    <FormContainer title="Register">
      <Form handleSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <span>First name</span>
          <input
            ref={register}
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
          />
          <small className="text-danger">{errors?.firstName?.message}</small>
        </div>
        <div className="form-group">
          <span>Last name</span>
          <input ref={register} type="text" className="form-control" id="lastName" name="lastName" />
          <small className="text-danger">{errors?.lastName?.message}</small>
        </div>
        <div className="form-group">
          <span>Email address</span>
          <input ref={register} type="email" className="form-control" id="email" name="email" />
          <small className="text-danger">{errors?.email?.message}</small>
        </div>
        <div className="form-group">
          <span>Username</span>
          <input ref={register} type="text" className="form-control" id="username" name="username" />
          <small className="text-danger">{errors?.username?.message}</small>
        </div>
        <div className="form-group">
          <span>Password</span>
          <input ref={register} type="password" className="form-control" id="password" name="password" />
          <small className="text-danger">{errors?.password?.message}</small>
        </div>
        <div className="form-group">
          <span>Confirm Pasword</span>
          <input ref={register} type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
          <small className="text-danger">{errors?.confirmPassword?.message}</small>
        </div>

        <div className="custom-file">
          <span>Select Avatar</span>
          <input ref={register} type="file" name="image" className="form-control-file" id="image" placeholder="Choose Avatar" />
          <small className="text-danger">{errors?.image?.message}</small>
        </div>

        <div className="form-group form-check pl-0 pt-3">
          <span className="mr-4">Register as trainer</span>
          <input ref={register} name="isTrainer" type="checkbox" className="form-check-input" id="isTrainer" />
          <div className="register__trainer-info" id="register__trainer-info">
            <div className="form-group mt-3">
              <span>Speciality</span>
              <input ref={register} type="text" className="form-control" id="speciality" name="speciality" />
              <small className="text-danger">{errors?.speciality?.message}</small>
            </div>
            <div className="form-group">
              <span>Info</span>
              <input ref={register} type="text" className="form-control" id="info" name="info" />
              <small className="text-danger">{errors?.info?.message}</small>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </FormContainer>
  );
};

export default connect()(Register);
