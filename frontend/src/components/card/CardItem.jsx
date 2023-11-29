import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { playRequestedSong, pauseRequestedSong } from "../../store/slices/song";
import { useGlobalContext } from "../../context/CurrentSongContext";

const CardItem = ({ song, idx }) => {
  const { currentSong, isPlaying } = useSelector((state) => state.mainSong);
  const { resetAllSongs, setSongIdx } = useGlobalContext();
  const dispatch = useDispatch();

  const handlePlaySong = (song) => {
    setSongIdx(idx);
    console.log(idx);
    if (isPlaying) {
      currentSong.mp3.currentTime = 0;
      currentSong.mp3.pause();
      resetAllSongs();
    }
    dispatch(playRequestedSong(song));
  };

  const handlePauseSong = () => {
    dispatch(pauseRequestedSong());
  };
  return (
    song && (
      <div className="cards_items">
        <img src={song.image} alt={song.title} />
        {currentSong.id === song.id && isPlaying ? (
          <button onClick={handlePauseSong} className="overlayBtn">
            <FaPause />
          </button>
        ) : (
          <button onClick={() => handlePlaySong(song)} className="overlayBtn">
            <FaPlay />
          </button>
        )}

        <div className="cards_items-desc">
          <h2>{song.title}</h2>
          <p>{song.artist}</p>
        </div>
      </div>
    )
  );
};

export default CardItem;
