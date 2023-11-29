import { createContext, useContext, useState } from "react";
import { loggedUser } from "../store/slices/user";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currTime, setCurrTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const [songIdx, setSongIdx] = useState(0);

  const resetAllSongs = () => {
    setProgress(0);
    setCurrTime("00:00");
    setDuration("00:00");
  };

  const dispatch = useDispatch();

  const getLoggedUser = async () => {
    const token = JSON.parse(localStorage.getItem("loggedUser"));
    if (token) {
      const res = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token,
        },
      });
      const data = await res.json();
      if (data.success) {
        dispatch(loggedUser(data.user));
      } else {
        toast.error(data.message);
      }
    }
  };

  return (
    <AppContext.Provider
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
        getLoggedUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
