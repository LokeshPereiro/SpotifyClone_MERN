import { FaSearch } from "react-icons/fa";
import "./styles.scss";
import { useEffect, useState } from "react";

const SearchInput = ({ handleFilterSongs }) => {
  const [query, setQuery] = useState("");
  const handleQuery = (evt) => {
    setQuery(evt.target.value);
    handleFilterSongs(query);
  };

  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={handleQuery}
        placeholder="Search songs, playlists.."
      />
      <FaSearch />
    </div>
  );
};

export default SearchInput;
