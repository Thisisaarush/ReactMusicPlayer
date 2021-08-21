import { useState } from 'react';
import './styles/App.scss';
import Song from './components/Song/Song.component';
import Player from './components/Player/Player.component';
import NavigationBar from './components/NavigationBar/NavigationBar.component';

import cardigan from './assets/cardigan.mp3';


const Music = [
  {
    name: 'cardigan',
    artist: 'taylor swift',
    audio: cardigan 
  }
];

function App() {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      <Song music={Music}/>
      <Player music={Music} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
