import React, { useState } from 'react';
import { IoGridOutline } from 'react-icons/io5';
import { MdPeopleOutline } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';
import '../scss/SideBar.scss';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector(state => state.auth);
  const screenWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
  );

  if (screenWidth >= 768 && !open) setOpen(!open);

  return (
    <div className="sidebar">
      <div className={`sidebar__switch position-absolute ${open ? 'sidebar__open' : ''}`} role="button" tabIndex={0} onKeyUp={() => setOpen(!open)} onClick={() => setOpen(!open)}>
        {open ? <GrClose /> : <GiHamburgerMenu />}
      </div>
      <div className={`d-flex flex-column align-items-center sidebar__nav ${open ? 'sidebar__active' : ''}`}>
        <div className="d-flex flex-column align-items-center">
          <img className="sidebar__profileImage" src={user?.img_url || ''} alt="User Profile" />
          <h4 className="pt-2 text-white">{`${user?.first_name || ''} ${user?.last_name || ''}`}</h4>
        </div>
        <ul className="d-flex flex-column align-items-center w-100 mt-5">
          <MenuItem name="Dashboard" url="/dashboard" Icon={IoGridOutline} />
          <MenuItem name="Trainers" url="/trainers" Icon={MdPeopleOutline} />
          <MenuItem name="Appointments" url="/appointments" Icon={CgGym} />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
