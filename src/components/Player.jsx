import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setCurrentSong,
}) => {
  const clickHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const selectSongHandler = async direction => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);

    if (direction === "skip-foreward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      if (currentIndex === 0) {
        await setCurrentSong(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[currentIndex - 1]);
      }
    }
    if (isPlaying) audioRef.current.play();
  };
  const { currentTime, duration } = songInfo;

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(currentTime || 0)}</p>

        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={duration || 0}
            value={currentTime || 0}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="animated-track"
            style={{
              transform: `translateX(${songInfo.animationPercentage}%)`,
            }}
          ></div>
        </div>
        <p>{formatTime(duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => selectSongHandler("skip-backward")}
        />
        <FontAwesomeIcon
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={clickHandler}
        />
        <FontAwesomeIcon
          className="skip-foreward"
          icon={faAngleRight}
          size="2x"
          onClick={() => selectSongHandler("skip-foreward")}
        />
      </div>
    </div>
  );
};

export default Player;
