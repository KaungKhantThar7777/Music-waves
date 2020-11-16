import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  isActive,
}) => {
  const { cover, name, artist } = song;
  const selectSongHandler = async () => {
    audioRef.current.pause();
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song ${isActive ? "selected" : ""}`}
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
