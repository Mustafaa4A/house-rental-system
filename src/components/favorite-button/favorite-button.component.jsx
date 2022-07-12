import { useState } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import "./favorite-button.styles.css";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  //
  const handlerFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <span
      className="span text-danger cursor-pointer  border border-1 border-dark rounded m-2 p-1"
      onClick={handlerFavorite}
    >
      {isFavorite ? (
        <MdFavorite style={{ fontSize: "2em" }} />
      ) : (
        <MdOutlineFavoriteBorder style={{ fontSize: "2em" }} />
      )}
    </span>
  );
};

export default FavoriteButton;
