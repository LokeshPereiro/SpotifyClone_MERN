import { FaArrowLeft, FaArrowRight, FaUser } from "react-icons/fa";
import "./styles.scss";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../../context/CurrentSongContext";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "../search-input/SearchInput";
import { randomSongs } from "../../constants";
import Dropdown from "../dropdown/Dropdown";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();

  const { filteredSongs, setFilteredSongs, getLoggedUser } = useGlobalContext();

  const handleFilterSongs = (evt) => {
    const fil = randomSongs.filter((song) => {
      if (
        song.title.toLowerCase().includes(evt) ||
        song.artist.toLowerCase().includes(evt)
      )
        return song;
    });
    setFilteredSongs(fil);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);
  return (
    <div className="home_registerOptions">
      <div className="home_navigationBtns">
        <div className="arrows d_flex">
          <span>
            <FaArrowLeft />
          </span>
          <span>
            <FaArrowRight />
          </span>
        </div>
        {location.pathname === "/search" && (
          <SearchInput handleFilterSongs={handleFilterSongs} />
        )}
      </div>

      <div className="home_signings">
        {isAuthenticated ? (
          <>
            <Dropdown />
          </>
        ) : (
          <>
            <Link to="/signup" className="btn_navbar">
              Sign up
            </Link>
            <Link className="btn_navbar" to="/login">
              Log in
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
