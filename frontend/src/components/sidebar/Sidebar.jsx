import "./styles.scss";
import { BiSolidHome, BiLibrary } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Signup from "./Signup";
import { spotify } from "../../constants";
import SongBar from "../song-bar/SongBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import like from "../../assets/like.jpg";
const Sidebar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isPlaying } = useSelector((state) => state.mainSong);
  const [playlists, setPlaylists] = useState([]);

  const getPlaylists = async () => {
    const res = await fetch("http://localhost:5000/api/playlist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let d = await res.json();
    console.log(d);
    setPlaylists(d.playlists);
  };
  useEffect(() => {
    getPlaylists();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__home secondary_bg">
        <img src={spotify} />
        <Link to="/" className="sidebar__home--icon d_flex">
          <BiSolidHome />
          <span>Home</span>
        </Link>
        <Link to="/search" className="sidebar__home--icon d_flex">
          <FaSearch />
          <span>Search</span>
        </Link>
      </div>
      <div className="sidebar__library secondary_bg">
        <div className="sidebar__library--wrap d_flex">
          <div className="icons d_flex">
            <BiLibrary />
            <span>Your Library</span>
          </div>
          <button>
            <FaPlus />
          </button>
        </div>
        <div className="sidebar__library--filtering">
          <button>Playlist</button>
          <button>Artist</button>
        </div>
        {playlists.map((p) => {
          return (
            <div key={p._id} className="playlists">
              <div>
                <img src={like} alt={p.title} />
              </div>
              <div className="playlists_desc">
                <h3>{p.title}</h3>
                <p>
                  Playlist
                  <span> . {p.songs.length} Songs</span>
                </p>
              </div>
            </div>
          );
        })}

        {/* <div className="sidebar__library--playlist-podcast">
          <div className="playlist tertiary_bg">
            <p>Create your first playlist</p>
            <p>It's easy, we'll help you</p>
            <button>Create playlist</button>
          </div>
          <div className="podcast tertiary_bg">
            <p>Let's find some podcasts to follow</p>
            <p>We'll keep you updated on new episodes</p>
            <button>Browse podcast</button>
          </div>
        </div> */}
      </div>
      <div className="sidebar__copyrights d_flex">
        <a href="#">Legal</a>
        <a href="#">Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies Settings</a>
        <a href="#">About Ads</a>
        <a href="#">Accessibility</a>
        <a href="#">Cookies</a>
      </div>
      <button className="sidebar__language d_flex">
        <TbWorld />
        <span>English</span>
      </button>
      {!isAuthenticated && <Signup />}
      <SongBar />
    </div>
  );
};

export default Sidebar;
