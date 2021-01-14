import React from 'react';
import PropTypes from 'prop-types';
import '../scss/Trainer.scss';
import { Link } from 'react-router-dom';

const Trainer = ({
  id, imgUrl, firstName, lastName, username, speciality,
}) => (
  <Link to={`/trainers/${id}`}>
    <div className="profile-card p-0 m-1">
      <img src={imgUrl} className="img img-responsive h-100 w-100" alt="Trainer" />
      <h3 className="profile-name">{`${firstName} ${lastName}`}</h3>
      <h5 className="profile-username">{username}</h5>
      <h6 className="profile-speciality">{speciality}</h6>
    </div>
  </Link>
);

Trainer.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
};

export default Trainer;
