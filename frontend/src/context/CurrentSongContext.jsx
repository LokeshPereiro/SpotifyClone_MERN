import { createContext, useContext, useState } from "react";
const CurrentSongContext = createContext();

export const CurrentSongProvider = ({ children }) => {
  const [currTime, setCurrTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const [songIdx, setSongIdx] = useState(0);

  const resetAllSongs = () => {
    setProgress(0);
    setCurrTime("00:00");
    setDuration("00:00");
    // setSongIdx((prev) => prev + 1);
  };

  return (
    <CurrentSongContext.Provider
      value={{
        currTime,
        setCurrTime,
        duration,
        setDuration,
        progress,
        setProgress,
        resetAllSongs,
        songIdx,
        setSongIdx,
      }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CurrentSongContext);
};
