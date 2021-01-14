import React, { useEffect, useState } from 'react';
import Trainer from '../components/TrainerCard';
import { gettRequest } from '../utils/api';
import { trainersUrl } from '../utils/constants';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    const getTrainers = async () => {
      const { data } = await gettRequest(trainersUrl);
      setTrainers(data);
    };
    getTrainers();
  }, []);

  return (
    <div className="row justify-content-center align-items-center m-0">
      {trainers && trainers.map(({
        id, img_url, first_name, last_name, username, speciality,
      }) => (
        <Trainer
          key={id}
          id={id}
          imgUrl={img_url}
          firstName={first_name}
          lastName={last_name}
          username={username}
          speciality={speciality}
        />
      ))}
    </div>
  );
};

export default Trainers;
