import React, { useState, useRef } from 'react';
import './Player.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const Player = ({ music, isPlaying, setIsPlaying }) => {

  const audioRef = useRef(null);

  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration});
  }

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value});
  }

  return(
    <div className='player-container'>
      <audio 
        ref={audioRef} 
        onTimeUpdate={timeHandler} 
        onLoadedMetadata={timeHandler} 
        src={music[0].audio}>
      </audio>
      
      <div className="timeslide-container">
        <p className='time'>{getTime(songInfo.currentTime)}</p>

        <input 
          className='slider' 
          min={0} 
          max={songInfo.duration} 
          value={songInfo.currentTime} 
          onChange={dragHandler}
          type="range" 
        />

        <p className='time'>{getTime(songInfo.duration)}</p>
      </div>

      <div className="play-container">
        <FontAwesomeIcon onClick={playHandler} className='icon' 
          icon={isPlaying ? faPause : faPlay} />
      </div>
    </div>
  );
}

export default Player;