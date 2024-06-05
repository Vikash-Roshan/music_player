//shows name artist player, ie basic song info
import React from 'react'

const LibrarySong = ({ song, setCurrentSong, songs, id, key, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = (e) => {
        setCurrentSong(songs.filter((state) => state.id === id)[0])
        console.log(key)
        const newSongs = songs.map((song) => {
            if (song.id === id) {
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
        console.log(song)
    }

    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
            <img src={song.cover} alt='song cover'/>
            <div className='song-description'>
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    )
}

export default LibrarySong;