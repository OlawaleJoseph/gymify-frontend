/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Timer({ timeFrame }) {
  let interval;
  const [time, setTime] = useState('');
  const countDown = duration => {
    let timer = duration / 1000; let minutes; let seconds; let hours;
    interval = setInterval(() => {
      hours = Math.floor(parseInt(timer / 3600, 10));
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      setTime(`${hours} : ${minutes} : ${seconds}`);
      if (timer <= 0) clearInterval(interval);
      timer -= 1;
    }, 1000);
  };
  useEffect(() => {
    countDown(timeFrame);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="timer mb-0">{time}</p>
  );
}

Timer.propTypes = {
  timeFrame: PropTypes.number.isRequired,
};

export default Timer;
