import React from 'react';
import { BiExit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { signOut } from '../utils/api';
import '../scss/Nav.scss';

const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-100 d-flex justify-content-end py-4 px-3">
      <BiExit className="nav__logout" onClick={() => dispatch(signOut())} />
    </div>
  );
};

export default Nav;
