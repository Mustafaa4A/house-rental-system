import { useContext, Fragment } from "react";

import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import { UserContext } from "../../contexts/user.context";
import { UserFavoritesContext } from "../../contexts/user-favorites.contex";

import "./favorite-icon.styles.css";

const FavoriteIcon = ({ property }) => {
  const { currentUser } = useContext(UserContext);
  const { addUserFavorites, removeUserFavorite, isUserFavorite } =
    useContext(UserFavoritesContext);

  //
  const handlerFavorite = () => {
    if (!isUserFavorite(property)) {
      addUserFavorites(property);
    } else {
      removeUserFavorite(property);
    }
  };
  return (
    <Fragment>
      {currentUser && (
        <span
          className="span text-danger cursor-pointer  border border-1 border-dark rounded m-2 p-1"
          onClick={handlerFavorite}
        >
          {isUserFavorite(property) ? (
            <MdFavorite size={25} />
          ) : (
            <MdOutlineFavoriteBorder size={25} />
          )}
        </span>
      )}
    </Fragment>
  );
};

export default FavoriteIcon;
