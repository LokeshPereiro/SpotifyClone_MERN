import React from "react";
import CategoryItems from "./CategoryItems";
import { categories, randomSongs } from "../../constants";
import CardItem from "../card/CardItem";
import { useGlobalContext } from "../../context/CurrentSongContext";

const CategoryCard = () => {
  const { filteredSongs } = useGlobalContext();
  return (
    <div className="cardContainer">
      <div className="cardOptions d_flex_between">
        <span>Browse All</span>
      </div>

      {filteredSongs?.length > 0 && (
        <div className="cards">
          {filteredSongs?.map((song, idx) => (
            <CardItem key={song.id} idx={idx} song={song} />
          ))}
        </div>
      )}
      {filteredSongs?.length <= 0 && (
        <div className="category__cards">
          {categories?.map((category, idx) => (
            <CategoryItems key={idx} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
