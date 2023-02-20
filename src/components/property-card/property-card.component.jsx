import { Link } from "react-router-dom";

import { FaBed, FaBath } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import FavoriteIcon from "../favorite-icon/favorite-icon.component";

const PropertyCard = ({ property, to }) => {
  const { name, description, price, img, bedrooms, bathrooms, squareArea } =
    property;

  return (
    <div className="card m-3 shadow card-link-pop ">
      <div className="position-absolute top-20 end-0 mt-2">
        <FavoriteIcon property={property} />
      </div>
      <Link to={to} className="nav-link">
        <div class="row">
          <div class="col-md-3 col-sm-12 m-0">
            <img src={img} class="w-100 h-100 object-cover" alt="Card side" />
          </div>
          <div class="col">
            <div class="card-body">
              <h3 class="card-title mb-2">{name}</h3>
              <p className="text-muted mb-2">
                {`${description.substr(0, 100)}...`}
              </p>
              <p className="text-uppercase font-weight-bold badge bg-yellow">
                {`$${price}/Month`}
              </p>

              <div className="text-muted">
                <section className="d-inline-block me-3">
                  <span>{bedrooms}</span>
                  <FaBed className="ms-2" />
                </section>
                <section className="d-inline-block me-3">
                  <span>{bathrooms}</span>
                  <FaBath className="ms-2" />
                </section>
                <section className="d-inline-block me-3">
                  <span>{squareArea} sqlmeter</span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
