import { FaSearch } from "react-icons/fa";
import "./styles.scss";

const SearchInput = () => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search songs, playlists.."
      />
      <FaSearch />
    </div>
  );
};

export default SearchInput;
