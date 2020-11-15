import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  currentSong,
  audioRef,
  isPlaying,
  isLibraryOpen,
}) => {
  return (
    <div className={`library ${isLibraryOpen ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong
            audioRef={audioRef}
            song={song}
            key={song.id}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            isActive={currentSong.id === song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
