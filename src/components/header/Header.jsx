import React from 'react';
import './Header.css';
import netflixLogo from '../../assets/netflixLogo.png';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Header() {
  return (
    <div className="mainDiv">
        <div className='leftDiv'>
            <ul>
              <li><img src={netflixLogo} alt="Logo" /></li>
              <li>Netflix</li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
              <li></li>
            </ul>
        </div>

        <div className='rightDiv'>
            <ul>
              <li><SearchOutlinedIcon /></li>
              <li><NotificationsNoneOutlinedIcon /></li>
              <li><AccountBoxOutlinedIcon /></li>
              <li><ArrowDropDownOutlinedIcon /></li>
            </ul>
        </div>
    </div>
  )
}

export default Header