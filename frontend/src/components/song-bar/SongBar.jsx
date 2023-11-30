import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai";
import { FaPause, FaPlay } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { BiShuffle, BiRepeat } from "react-icons/bi";
import { BsArrowsAngleContract, BsSpeakerFill } from "react-icons/bs";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";
import {
  HiMiniSpeakerWave,
  HiMiniSpeakerXMark,
  HiQueueList,
} from "react-icons/hi2";
import {
  pauseCurrentSong,
  playCurrentSong,
  playRequestedSong,
} from "../../store/slices/song";
import { useGlobalContext } from "../../context/CurrentSongContext";
import { randomSongs } from "../../constants";

const SongBar = () => {
  const { currentSong, isPlaying } = useSelector((state) => state.mainSong);
  const {
    progress,
    setProgress,
    resetAllSongs,
    currTime,
    setCurrTime,
    duration,
    setDuration,
    songIdx,
    setSongIdx,
  } = useGlobalContext();

  const dispatch = useDispatch();

  const handleCurrentSong = () => {
    if (isPlaying) {
      dispatch(pauseCurrentSong());
    } else {
      dispatch(playCurrentSong());
    }
  };

  const addToLiked = async () => {
    console.log(currentSong.mp3);
    let data = JSON.stringify({
      song_mp3: currentSong.mp3.src,
      song_title: currentSong.title,
      song_artist: currentSong.artist,
      song_thumbnail: currentSong.image,
    });
    const res = await fetch("http://localhost:5000/api/playlist/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("loggedUser"),
      },
      body: data,
    });

    let d = await res.json();
    console.log(d);
  };

  useEffect(() => {
    if (currentSong.mp3) {
      setDuration(formatTime(currentSong?.mp3?.duration));

      isPlaying ? currentSong?.mp3?.play() : currentSong?.mp3?.pause();
    }
    if (isPlaying) {
      setInterval(() => {
        if (progress === 100) {
          dispatch(pauseCurrentSong());
          resetAllSongs();
        } else {
          setProgress(
            Math.round(
              (currentSong.mp3.currentTime / currentSong.mp3.duration) * 100
            )
          );
          setCurrTime(formatTime(currentSong.mp3.currentTime));
        }
      }, 1000);
    }
  }, [currentSong, isPlaying]);

  const changeProgress = (evt) => {
    setProgress(evt.target.value);
    currentSong.mp3.currentTime =
      (evt.target.value / 100) * currentSong.mp3.duration;
  };

  const [volume, setVolume] = useState(50);

  const volumeChange = (evt) => {
    setVolume(evt.target.value);
    currentSong.mp3.volume = evt.target.value / 100;
  };

  const formatTime = (durationInSeconds) => {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.round(durationInSeconds % 60);
    let formattedDuration = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 9 ? "0" + seconds : seconds
    }`;

    return formattedDuration;
  };

  const mouseEnter = () => {
    document.querySelector(".active_progress").style.background = "#1db954";
  };
  const mouseLeave = () => {
    document.querySelector(".active_progress").style.background = "#fff";
  };
  const mouseEnterVolume = () => {
    document.querySelector("#volume").style.background = "#1db954";
  };
  const mouseLeaveVolume = () => {
    document.querySelector("#volume").style.background = "#fff";
  };

  const handlePrevSong = () => {
    console.log("prev");
    // resetAllSongs();

    if (currentSong.mp3) {
      currentSong?.mp3?.pause();
      currentSong.mp3.currentTime = 0;
    }
    if (songIdx <= 0) return;

    setSongIdx((prev) => prev - 1);
    dispatch(playRequestedSong(randomSongs[songIdx - 1]));
  };
  const handleNextSong = () => {
    console.log("next");
    // resetAllSongs();
    if (currentSong.mp3) {
      currentSong?.mp3?.pause();
      currentSong.mp3.currentTime = 0;
    }

    if (songIdx >= 7) return;

    setSongIdx((prev) => prev + 1);
    dispatch(playRequestedSong(randomSongs[songIdx + 1]));
  };
  return (
    <div className="songbarContainer">
      <div className="songbarWindow__wrap">
        <div className="songbarWindow__wrap--ele">
          <img src={currentSong?.image} alt={currentSong?.title} />
          <div className="songbarWindow__wrap--ele-info">
            <h3>{currentSong?.title}</h3>
            <span>{currentSong?.artist}</span>
          </div>
          <AiOutlineHeart onClick={addToLiked} />
          <CgScreen />
        </div>
      </div>
      <div className="rangeBar">
        <div className="controls d_flex">
          <BiShuffle />
          <IoMdSkipBackward onClick={handlePrevSong} />
          <div className="playBtn_wrap">
            {isPlaying ? (
              <FaPause onClick={handleCurrentSong} className="playBtn d_flex" />
            ) : (
              <FaPlay onClick={handleCurrentSong} className="playBtn d_flex" />
            )}
          </div>
          <IoMdSkipForward onClick={handleNextSong} />
          <BiRepeat />
        </div>
        <div className="d_flex progress">
          <span>{currTime}</span>
          <div className="progressInputWrapper">
            <input
              onChange={changeProgress}
              value={progress}
              disabled={!currentSong.mp3}
              className="range"
              type="range"
              min={0}
              max={100}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              id="progress_bar"
            />
            <div
              className="active_progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <span>{duration || "00:00"}</span>
        </div>
      </div>
      <div className="lastBarDiv">
        <div>
          <AiOutlinePlaySquare />
          <PiMicrophoneStageDuotone />
          <HiQueueList />
          <BsSpeakerFill />
          {volume <= 0 && <HiMiniSpeakerXMark />}
          {volume > 0 && <HiMiniSpeakerWave />}
        </div>
        <div className="volumeInputWrapper">
          <input
            onChange={volumeChange}
            value={volume}
            disabled={!currentSong.mp3}
            className="range"
            type="range"
            min={0}
            max={100}
            onMouseEnter={mouseEnterVolume}
            onMouseLeave={mouseLeaveVolume}
          />
          <div
            id="volume"
            className="active_progress"
            style={{ width: `${volume}%` }}
          ></div>
        </div>

        <BsArrowsAngleContract />
      </div>
      <div className="hidden">
        <div style={{ width: `${1}%` }}></div>
        <div style={{ width: `${2}%` }}></div>
        <div style={{ width: `${3}%` }}></div>
        <div style={{ width: `${4}%` }}></div>
        <div style={{ width: `${5}%` }}></div>
        <div style={{ width: `${6}%` }}></div>
        <div style={{ width: `${7}%` }}></div>
        <div style={{ width: `${8}%` }}></div>
        <div style={{ width: `${9}%` }}></div>
        <div style={{ width: `${10}%` }}></div>
        <div style={{ width: `${33}%` }}></div>
        <div style={{ width: `${34}%` }}></div>
        <div style={{ width: `${35}%` }}></div>
        <div style={{ width: `${36}%` }}></div>
        <div style={{ width: `${37}%` }}></div>
        <div style={{ width: `${38}%` }}></div>
        <div style={{ width: `${39}%` }}></div>
        <div style={{ width: `${40}%` }}></div>
        <div style={{ width: `${41}%` }}></div>
        <div style={{ width: `${42}%` }}></div>
        <div style={{ width: `${43}%` }}></div>
        <div style={{ width: `${44}%` }}></div>
        <div style={{ width: `${45}%` }}></div>
        <div style={{ width: `${46}%` }}></div>
        <div style={{ width: `${47}%` }}></div>
        <div style={{ width: `${48}%` }}></div>
        <div style={{ width: `${49}%` }}></div>
        <div style={{ width: `${50}%` }}></div>
        <div style={{ width: `${51}%` }}></div>
        <div style={{ width: `${52}%` }}></div>
        <div style={{ width: `${53}%` }}></div>
        <div style={{ width: `${54}%` }}></div>
        <div style={{ width: `${55}%` }}></div>
        <div style={{ width: `${56}%` }}></div>
        <div style={{ width: `${57}%` }}></div>
        <div style={{ width: `${58}%` }}></div>
        <div style={{ width: `${59}%` }}></div>
        <div style={{ width: `${60}%` }}></div>
        <div style={{ width: `${61}%` }}></div>
        <div style={{ width: `${62}%` }}></div>
        <div style={{ width: `${63}%` }}></div>
        <div style={{ width: `${64}%` }}></div>
        <div style={{ width: `${65}%` }}></div>
        <div style={{ width: `${66}%` }}></div>
        <div style={{ width: `${67}%` }}></div>
        <div style={{ width: `${68}%` }}></div>
        <div style={{ width: `${69}%` }}></div>
        <div style={{ width: `${70}%` }}></div>
        <div style={{ width: `${71}%` }}></div>
        <div style={{ width: `${72}%` }}></div>
        <div style={{ width: `${73}%` }}></div>
        <div style={{ width: `${74}%` }}></div>
        <div style={{ width: `${75}%` }}></div>
        <div style={{ width: `${76}%` }}></div>
        <div style={{ width: `${77}%` }}></div>
        <div style={{ width: `${78}%` }}></div>
        <div style={{ width: `${79}%` }}></div>
        <div style={{ width: `${80}%` }}></div>
        <div style={{ width: `${81}%` }}></div>
        <div style={{ width: `${82}%` }}></div>
        <div style={{ width: `${83}%` }}></div>
        <div style={{ width: `${84}%` }}></div>
        <div style={{ width: `${85}%` }}></div>
        <div style={{ width: `${86}%` }}></div>
        <div style={{ width: `${87}%` }}></div>
        <div style={{ width: `${88}%` }}></div>
        <div style={{ width: `${89}%` }}></div>
        <div style={{ width: `${90}%` }}></div>
        <div style={{ width: `${91}%` }}></div>
        <div style={{ width: `${92}%` }}></div>
        <div style={{ width: `${93}%` }}></div>
        <div style={{ width: `${94}%` }}></div>
        <div style={{ width: `${95}%` }}></div>
        <div style={{ width: `${96}%` }}></div>
        <div style={{ width: `${97}%` }}></div>
        <div style={{ width: `${98}%` }}></div>
        <div style={{ width: `${99}%` }}></div>
        <div style={{ width: `${100}%` }}></div>
      </div>
    </div>
  );
};

for (let i = 1; i <= 100; i++) {
  `<div style={{ width: ${i}% }}></div>`;
}

export default SongBar;
