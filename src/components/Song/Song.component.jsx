import React from 'react';
import './Song.style.scss';
import Cover from '../../assets/cover.jpg';

const Song = ({ music }) => {
  return(
    <div className='song-container'>
      <img src={Cover} alt="album art" />
      <h3 className='song-name'>{music[0].name}</h3>
      <h4 className='artist'>{music[0].artist}</h4>
    </div>
  );
}

export default Song;