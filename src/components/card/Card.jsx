import React from "react";
import { randomPlaylist } from "../../constants";
import "./styles.scss";
import { FaPlay } from "react-icons/fa";

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardOptions d_flex_between">
        <span>Playlist</span>
        <span>Show All</span>
      </div>

      <div className="cards">
        {randomPlaylist.map((item) => (
          <div className="cards_items" key={item.title}>
            <img src={item.image} alt={item.title} />
            <button className="overlayBtn">
              <FaPlay />
            </button>
            <div className="cards_items-desc">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cardOptions_focus d_flex_between">
        <span>Focus</span>
        <span>Show All</span>
      </div>

      <div className="cards">
        {randomPlaylist.map((item) => (
          <div className="cards_items" key={item.title}>
            <img src={item.image} alt={item.title} />
            <button className="overlayBtn">
              <FaPlay />
            </button>
            <div className="cards_items-desc">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
