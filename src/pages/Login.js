import React from 'react';
import { useDispatch, connect } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import FormContainer from '../containers/FormContainer';
import Form from '../components/Form';
import { authStart } from '../reducers/auth';
import { login } from '../utils/api';
import { getHeaders } from '../utils/common';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const headers = getHeaders();
  if (headers && Object.keys(headers).length) return <Redirect to="/dashboard" />;

  const handleOnsubmit = async userObj => {
    const { email, password } = userObj;

    const userData = new FormData();

    userData.append('email', email);
    userData.append('password', password);
    dispatch(authStart());
    await dispatch(login(userData));
  };
  return (
    <FormContainer title="Login">
      <Form handleSubmit={handleSubmit(handleOnsubmit)}>
        <div className="form-group">
          <span>Email address</span>
          <input ref={register} type="email" className="form-control" id="email" name="email" />
          <small className="text-danger">{errors?.email?.message}</small>
        </div>
        <div className="form-group">
          <span>Password</span>
          <input ref={register} type="password" className="form-control" id="password" name="password" />
          <small className="text-danger">{errors?.password?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </FormContainer>
  );
};

export default connect()(Login);
