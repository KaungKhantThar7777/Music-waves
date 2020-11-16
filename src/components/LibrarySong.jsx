import React from "react";
import { playAudio } from "../utils";

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  isActive,
}) => {
  const { cover, name, artist } = song;
  const selectSongHandler = () => {
    audioRef.current.pause();
    setCurrentSong(song);
    playAudio(isPlaying, audioRef);
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
