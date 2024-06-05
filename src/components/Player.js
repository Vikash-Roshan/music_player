import React,{useEffect} from 'react'
import { FaPlay,FaAngleLeft,FaAngleRight, FaPause } from "react-icons/fa6";

const Player = ({
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    currentSong,
    songs,
    setCurrentSong,
    setSongs,
  }) => {
    useEffect(()=>{
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true,
                }
            }
            else {
                return {
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs)
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    },[currentSong])
    const onPlayHandler = () => {
        // console.log('printing the value of audioref')
        if(isPlaying)
        audioRef.current.pause();
        else
        audioRef.current.play();
        setIsPlaying(!isPlaying)
    }

    const getTime = (time) => {

    return Math.floor(time/60) + ":" + ("0"+Math.floor(time%60)).slice(-2);
    }

    // const timeUpdateHandler = (e) => {
    //     const currentTime = e.target.currentTime;
    //     const duration = e.target.duration;
    //     setSongInfo({...songInfo,currentTime ,duration})
    // }

    const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
        // audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime:e.target.value })
    }

    const skipSong = (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex+1)%songs.length])
        }
        else{
            if((currentIndex-1) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1])
                return;
            }
            setCurrentSong(songs[(currentIndex-1)%songs.length])
        }
    } 

    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`,
      };

  return (
    <div className='player'>
        <div className='time-control'>
            <p> {getTime(songInfo.currentTime)}</p>
            <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]} )`}} className="track">
            <input
            value={songInfo.currentTime}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler} />
            <div style={trackAnim} className="animate-track"></div>
            </div>
            <p>{getTime(songInfo.duration)}</p>
        </div>
            <div className='player-control'>
            <FaAngleLeft onClick={()=>skipSong('skip-back')}/>
            <div className = "playOrPause">
{!isPlaying?<FaPlay onClick={onPlayHandler}/>:<FaPause onClick={onPlayHandler}/>}
            </div>
           
            <FaAngleRight onClick={ () => skipSong('skip-forward') }/>
            </div>
    </div>
  )
}

export default Player;