import React from 'react';
import './Navigation.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return(
    <div className='navigation-container'>
      <h2 className='logo'>Muzaic</h2>
      <div className='library-container'>
        <FontAwesomeIcon className='music-icon' icon={faMusic} />
        <h2 className='library'>Library</h2>
      </div>
    </div>
  );
}

export default NavigationBar;
