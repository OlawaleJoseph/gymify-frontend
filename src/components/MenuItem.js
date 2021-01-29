import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../scss/MenuItem.scss';

const MenuItem = ({ name, url, Icon }) => (
  <li className="d-flex py-3 justify-content-center w-100 menuitem">
    <Link className="menuitem__link" to={url}>
      <Icon />
      {name}
    </Link>
  </li>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default MenuItem;
