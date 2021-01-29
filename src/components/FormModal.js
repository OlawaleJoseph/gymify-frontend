import React from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Modal } from 'react-bootstrap';
import Form from './Form';

const schema = yup.object().shape({
  goal: yup.string().required('Goal is required'),
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  duration: yup.string().required('Duration is required'),
});

const FormModal = ({ show, handleClose, handleFormSubmit }) => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  return (
    <div className="content">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form handleSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group">
              <span>Date</span>
              <input ref={register} type="date" className="form-control" id="date" name="date" />
              <small className="text-danger">{errors?.date?.message}</small>
            </div>

            <div className="form-group">
              <span>Time</span>
              <input ref={register} type="time" className="form-control" id="time" name="time" />
              <small className="text-danger">{errors?.time?.message}</small>
            </div>

            <div className="form-group">
              <span>Duration</span>
              <select defaultValue="" ref={register} name="duration" className="custom-select">
                <option value="" disabled hidden> </option>
                <option value={15 * 60}>15 minutes</option>
                <option value={30 * 60}>30 minutes</option>
                <option value={45 * 60}>45 minutes</option>
                <option value={60 * 60}>1 hour</option>
                <option value={75 * 60}>1 hour 15 minutes</option>
                <option value={90 * 60}>1 hour 30 minutes</option>
                <option value={105 * 60}>1 hour 45 minutes</option>
                <option value={120 * 60}>2 hour</option>
              </select>
              <small className="text-danger">{errors?.duration?.message}</small>
            </div>
            <div className="form-group">
              <span>Goal</span>
              <textarea ref={register} type="textarea" className="form-control" id="goal" name="goal" rows="10" cols="50" />
              <small className="text-danger">{errors?.goal?.message}</small>
            </div>
            <button className="btn btn-primary w-100" type="submit">Book Now</button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

FormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default FormModal;
