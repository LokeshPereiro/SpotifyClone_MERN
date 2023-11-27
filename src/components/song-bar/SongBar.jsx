import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SongBar = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.mainSong);
  useEffect(() => {
    if (currentSong) {
      isPlaying ? currentSong?.mp3.play() : currentSong?.mp3?.pause();
    }
  }, [currentSong, isPlaying]);
  return (
    <div>
      <h1>SongBar</h1>
    </div>
  );
};

export default SongBar;
