import React from 'react';
import { Link } from 'react-router-dom';
import BgImage from '../assets/images/background.jpg';

const Homepage = () => (
  <div className="homepage">
    <nav className="d-flex px-5 justify-content-between align-items-center homepage__nav">
      <Link className="logo" to="/">GYMIFY</Link>
      <div className="d-flex">
        <Link className="mr-4 btn btn-info" to="/register">Register</Link>
        <Link className="btn btn-info" to="/sign_in">Login</Link>
      </div>
    </nav>
    <main className="px-5 d-flex justify-content-start align-items-center homepage__main" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="homepage__welcome_text">
        <h1>We Never Stop! We never falter!</h1>
        <h3>Keep fit with pride</h3>
        <Link className="btn btn-primary btn-lg" to="/register">Register</Link>
      </div>
    </main>
  </div>
);

export default Homepage;
