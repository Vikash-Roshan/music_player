import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import React,{useState,useRef} from 'react';
import data from './utils'
import Library from './components/Library';
import Nav from './components/Nav';


function App() {
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false)
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime:0,
    duration:0,
    animationPercentage:0
  })
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent/roundedDuration)*100)
    setSongInfo({...songInfo,currentTime: current,duration:duration,animationPercentage:animation})
  }

  return (
    <div className="App">
      <Nav libraryStatus = {libraryStatus} setLibraryStatus = {setLibraryStatus}/>
      <Song currentSong = {currentSong} />
     <Player 
     audioRef={audioRef}
     setIsPlaying={setIsPlaying}
     currentSong={currentSong}
     isPlaying={isPlaying}
     songInfo={songInfo}
     setSongInfo={setSongInfo}
     songs={songs}
     setSongs={setSongs}
     setCurrentSong={setCurrentSong}
     />
     <Library songs={songs} libraryStatus={libraryStatus} setCurrentSong={setCurrentSong} isPlaying={isPlaying} audioRef={audioRef} setSongs={setSongs}/>
     <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
       
      ></audio>

    </div>
  );
}

export default App;
