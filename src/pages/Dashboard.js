import React from 'react';
import SideBar from '../components/SideBar';
import Main from '../components/Main';
import Nav from '../components/Nav';
import '../scss/Dashboard.scss';

const Dashboard = () => (
  <div className="dashboard d-md-flex m-0">
    <SideBar />
    <div className="w-100 px-5">
      <Nav />
      <Main />
    </div>
  </div>
);

export default Dashboard;
