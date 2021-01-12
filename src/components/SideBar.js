import React, { useState } from 'react';
import { IoGridOutline } from 'react-icons/io5';
import { MdPeopleOutline } from 'react-icons/md';
import { CgGym } from 'react-icons/cg';
import { RiTeamLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';
import MenuItem from './MenuItem';
import '../scss/SideBar.scss';

const SideBar = () => {
  const [open, setOpen] = useState(false);
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
          <img className="sidebar__profileImage" src="https://images.unsplash.com/photo-1610046855622-2e20208553c1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="User Profile" />
          <h4 className="pt-2 text-muted">John Doe</h4>
        </div>
        <ul className="d-flex flex-column align-items-center w-100 mt-4">
          <MenuItem name="Dashboard" url="/dashboard" Icon={IoGridOutline} />
          <MenuItem name="Trainers" url="/dashboard" Icon={MdPeopleOutline} />
          <MenuItem name="Appointments" url="/dashboard" Icon={CgGym} />
          <MenuItem name="Group Sessions" url="/dashboard" Icon={RiTeamLine} />
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
