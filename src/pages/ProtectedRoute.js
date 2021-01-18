import React from 'react';
import Proptypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import { getHeaders } from '../utils/common';
import '../scss/Dashboard.scss';

const ProtectedRoute = ({ Component, ...rest }) => {
  const headers = getHeaders();
  if (!headers || !Object.keys(headers).length) {
    return <Redirect to="login" />;
  }
  return (
    <Route
      {...rest}
      render={() => (
        <div className="dashboard d-md-flex m-0">
          <SideBar />
          <div className="w-100 px-5 overflow-auto">
            <Nav />
            <Component />
          </div>
        </div>
      )}
    />
  );
};

ProtectedRoute.propTypes = {
  // url: Proptypes.string.isRequired,
  Component: Proptypes.func.isRequired,
};

export default ProtectedRoute;
