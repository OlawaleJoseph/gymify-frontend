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
  if (user) {
    const graphData = makeGraphData(user.gym_sessions);
    let title; let description; let id; let
      start_time;

    if (user?.gym_sessions?.length) {
      ({
        title, description, id, start_time,
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
                  id={id}
                  duration={(Date.parse(new Date(start_time)) - Date.now())}
                />
              )
              : <h3 className="card nextAppointment">No Appointment</h3>}
          </div>
        </section>
        <section className="mt-5">
          <h5>Appointments</h5>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Duration</th>
                <th scope="col">Status</th>
                <th scope="col">Countdown</th>
              </tr>
            </thead>
            <tbody>
              {user.gym_sessions.length && user.gym_sessions.map(({
                title, description, duration, id, start_time,
              }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>{formatDurationOutput(duration)}</td>
                  <td>
                    {(Date.parse(start_time) - Date.now()) > 0
                      ? <span className="text-success">Active</span>
                      : <span className="text-muted">Finished</span>}
                  </td>
                  <td>
                    {(Date.parse(start_time) - Date.now()) > 0
                      ? <Timer timeFrame={(Date.parse(new Date(start_time)) - Date.now())} />
                      : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }

  return 'DAmn!!!!!';
};

export default Main;
