import React, { useState } from 'react';
import { BiExit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../utils/api';
import '../scss/Nav.scss';

const Nav = () => {
  const [loggedOut, setloggedOut] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
    setloggedOut(true);
  };
  if (loggedOut) return (<Redirect to="/" />);
  return (
    <div className="w-100 d-flex justify-content-end py-4 px-3 nav">
      <BiExit className="nav__logout" onClick={handleLogout} />
    </div>
  );
};

export default Nav;
