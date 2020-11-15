import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const { cover, name, artist } = song;
  const selectSongHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(audio => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div onClick={selectSongHandler} className="library-song">
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
