import { Fragment, useContext } from "react";

import { GrFavorite } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

import Button from "../button/button.component";
import Dropdown from "../dropdown/dropdown.component";
import DropdownItem from "../dropdown-item/dropdown-item.component";
import Avator from "../avator/avator.component";

import { UserFavoritesContext } from "../../contexts/user-favorites.contex";

const UserFavorites = () => {
  const { userFavorites, favoritesCount, removeUserFavorite } =
    useContext(UserFavoritesContext);

  return (
    <Fragment>
      <Button icon={<GrFavorite size={20} />} data-bs-toggle="dropdown">
        Shortlist
        {favoritesCount !== 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge bg-red rounded-circle">
            {favoritesCount}
          </span>
        )}
      </Button>
      <Dropdown
        style={{
          width: "250px",
          height: "300px",
          overflow: "scroll",
        }}
      >
        {favoritesCount ? (
          userFavorites.map((property) => (
            <DropdownItem key={property.id}>
              <Avator
                size={"md"}
                display={"md"}
                to={`/properties/${property.id}`}
                img={property.img}
                name={property.name}
                title={`Price: $${property.price}`}
              />
              <span className="position-absolute top-0 end-0 m-2">
                <MdDelete
                  size={18}
                  className="text-danger"
                  onClick={() => removeUserFavorite(property)}
                />
              </span>
            </DropdownItem>
          ))
        ) : (
          <div className="text-muted d-flex justify-content-center">
            <h3>No properties selected</h3>
          </div>
        )}
      </Dropdown>
    </Fragment>
  );
};
export default UserFavorites;
