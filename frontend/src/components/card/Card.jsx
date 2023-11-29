import { randomPlaylist, randomSongs } from "../../constants";
import "./styles.scss";
import CardItem from "./CardItem";
import { FaPlay } from "react-icons/fa";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardOptions d_flex_between">
        <span>Browse All</span>
        <span>Show All</span>
      </div>

      <div className="cards">
        {randomSongs?.map((song, idx) => (
          <CardItem key={song.id} idx={idx} song={song} />
        ))}
      </div>

      <div className="cardOptions_focus d_flex_between">
        <span>Focus</span>
        <span>Show All</span>
      </div>
    </div>
  );
};

export default Card;
