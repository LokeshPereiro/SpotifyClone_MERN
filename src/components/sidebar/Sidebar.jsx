import "./styles.scss";
import { BiSolidHome, BiLibrary } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Signup from "./Signup";
import { spotify } from "../../constants";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__home secondary_bg">
        <img src={spotify} />
        <div className="sidebar__home--icon d_flex">
          <BiSolidHome />
          <span>Home</span>
        </div>
        <div className="sidebar__home--icon d_flex">
          <FaSearch />
          <span>Search</span>
        </div>
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

        <div className="sidebar__library--playlist-podcast">
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
        </div>
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
      <Signup />
    </div>
  );
};

export default Sidebar;
