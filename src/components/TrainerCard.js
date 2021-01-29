import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentTrainerId } from '../reducers/trainers';
import '../scss/Trainer.scss';

const TrainerCard = ({
  id, imgUrl, firstName, lastName, username, speciality,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentTrainerId(id));
  };

  return (
    <Link to={`/trainers/${id}`} onClick={handleClick}>
      <div className="profile-card p-0 m-1">
        <img src={imgUrl} className="img img-responsive h-100 w-100" alt="Trainer" />
        <h3 className="profile-name">{`${firstName} ${lastName}`}</h3>
        <h5 className="profile-username">{username}</h5>
        <h6 className="profile-speciality">{speciality}</h6>
      </div>
    </Link>
  );
};

TrainerCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
};

export default TrainerCard;
