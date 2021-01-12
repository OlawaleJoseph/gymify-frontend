import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Timer from './Timer';

function NextAppointment({
  title, desc, duration, id,
}) {
  return (
    <div className="card nextAppointment">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text w-50">{desc}</p>
        <Timer timeFrame={duration} />
      </div>
      <div className="card-body">
        <Link to={`appointments/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}

NextAppointment.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};

export default NextAppointment;
