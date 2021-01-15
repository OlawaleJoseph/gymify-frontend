import React, { useEffect, useState } from 'react';
import { gettRequest } from '../utils/api';
import { appointmentsUrl } from '../utils/constants';
import TrainerCard from '../components/TrainerCard';
import { formatDurationOutput } from '../utils/common';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchAppointments = async () => {
      const { data } = await gettRequest(appointmentsUrl);
      setAppointments(data);
    };
    fetchAppointments();
  }, []);
  return (
    <div className="row justify-content-center align-items-center m-0">
      {appointments.map(({ id, gym_session }) => {
        const { title, description, duration } = gym_session;
        const { img_url } = gym_session.instructor;
        const durationInWords = formatDurationOutput(duration);
        return (
          <TrainerCard
            key={id}
            id=""
            imgUrl={img_url}
            firstName={title}
            lastName=""
            username={durationInWords}
            speciality={description}
          />
        );
      })}
    </div>
  );
};

export default Appointments;
