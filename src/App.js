import React, { useRef, useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import "./styles/app.scss";

function App() {
  const [songs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const audioRef = useRef(null);
  const { audio } = currentSong;

  const updateTimeHandler = e => {
    const { currentTime, duration } = e.target;

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };

  return (
    <div className="App">
      <Nav setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        songs={songs}
        setCurrentSong={setCurrentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        isLibraryOpen={isLibraryOpen}
      />
      <audio
        onLoadedMetadata={updateTimeHandler}
        onTimeUpdate={updateTimeHandler}
        ref={audioRef}
        src={audio}
      ></audio>
    </div>
  );
}

export default App;
