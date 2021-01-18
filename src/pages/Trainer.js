import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { gettRequest, postRequest } from '../utils/api';
import { newAppointmnetUrl, trainersUrl } from '../utils/constants';
import TrainerCard from '../components/TrainerCard';
import FormModal from '../components/FormModal';
import { timeZone } from '../utils/common';

const Trainer = () => {
  const [trainer, setTrainer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const id = useSelector(state => state.trainers.currentTrainerId);
  const timezone = timeZone();

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleFormSubmit = async ({
    date, goal, time, duration,
  }) => {
    const appointmentData = new FormData();

    appointmentData.append('start_time', `${date} ${time}`);
    appointmentData.append('description', goal);
    appointmentData.append('duration', duration);
    appointmentData.append('title', goal);
    appointmentData.append('is_private', true);
    appointmentData.append('instructor_id', id);
    appointmentData.append('time_zone', timezone);

    try {
      await postRequest(newAppointmnetUrl, appointmentData);
      toast.success('Booking was successful');
      handleCloseModal();
      history.push('/dashboard');
    } catch (e) {
      if (e.response?.status === 422) {
        Object.values(e.response.data.errors).forEach(msg => {
          toast.error(msg[0]);
        });
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  useEffect(() => {
    const fetchTrainer = async () => {
      const { data } = await gettRequest(`${trainersUrl}/${id}`);
      setTrainer(data);
    };
    fetchTrainer();
  }, []);
  if (trainer) {
    return (
      <div className="d-md-flex justify-content-center">
        <TrainerCard
          id={trainer?.id}
          firstName=""
          lastName=""
          imgUrl={trainer?.img_url}
          speciality=""
          username=""
        />
        <div className="d-flex flex-column justify-content-evenly trainer_info font-weight-light py-4">
          <div>
            <h1 className="text-capitalize font-weight-light">{`${trainer.last_name} ${trainer.first_name}`}</h1>
            <h3 className="text-capitalize font-weight-light ">{trainer.speciality}</h3>
            <h3 className="font-weight-light">{trainer.username}</h3>
            <h5 className="font-weight-light">{trainer.info}</h5>
          </div>
          <div className="mt-4">
            <p className="font-weight-light mb-1">{`Sessions sucessfully completed: ${trainer.gym_sessions.length}`}</p>
            <button type="button" onClick={handleShowModal} className="btn btn-primary btn lg">Book Appointment</button>
            <FormModal
              show={showModal}
              handleClose={handleCloseModal}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
  return (<span>Loading...</span>);
};

export default Trainer;
