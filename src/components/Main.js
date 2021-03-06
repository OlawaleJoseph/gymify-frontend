import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatGraph from './LineGraph';
import NextAppointment from './NextAppointment';
import Timer from './Timer';
import { updateUser } from '../utils/api';
import { formatDurationOutput, makeGraphData, getLatestSession } from '../utils/common';
import '../scss/Main.scss';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(updateUser());
  }, []);
  const { user } = useSelector(state => state.auth);
  let title; let description; let start_time;
  if (user) {
    const graphData = makeGraphData(user.gym_sessions);

    if (user?.gym_sessions?.length) {
      ({
        title, description, start_time,
      } = getLatestSession(user.gym_sessions));
    }

    return (
      <div className="h-100 mt-3">
        <section className="main__graphs row m-0">
          <StatGraph dataArr={graphData} />
          <div className="col-lg-6">
            <h5>Next Appointment</h5>
            {user?.gym_sessions.length
              ? (
                <NextAppointment
                  title={title}
                  desc={description}
                  duration={(Date.parse(new Date(start_time)) - Date.now())}
                />
              )
              : <h3 className="card nextAppointment">No Appointment</h3>}
          </div>
        </section>
        <section className="mt-5">
          <h5>Recent Appointments</h5>
          <ul className="main__appointments w-100">
            <li className="listHeading">
              <span className="py-4 px-2">Trainer</span>
              <span className="py-4 px-2">Description</span>
              <span className="py-4 px-2">Duration</span>
              <span className="py-4 px-2">Status</span>
              <span className="py-4 px-2">Countdown</span>
            </li>
            {user?.gym_sessions
              .slice()
              .sort((a, b) => (
                Date.parse(a.start_time) > Date.parse(b.start_time)))
              .filter(item => Date.parse(item.start_time) > Date.now()).slice(0, 10)
              .map(({
                description, duration, id, start_time, instructor,
              }) => (
                <li key={id} className="listBody">
                  <span className="py-3">{instructor.username}</span>
                  <span className="py-3">{description}</span>
                  <span className="py-3">{formatDurationOutput(duration)}</span>
                  {(Date.parse(start_time) - Date.now()) > 0
                    ? <span className="text-success py-3">Active</span>
                    : <span className="text-muted py-3">Finished</span>}
                  <span className="py-3">
                    {(Date.parse(start_time) - Date.now()) > 0
                      ? <Timer timeFrame={(Date.parse(new Date(start_time)) - Date.now())} />
                      : ''}
                  </span>
                </li>
              ))}
          </ul>
        </section>
      </div>
    );
  }

  return 'Loading...';
};

export default Main;
