import { FaBed, FaBath } from "react-icons/fa";
import { Link } from "react-router-dom";
import FavoriteButton from "../favorite-button/favorite-button.component";
const PropertyCard = ({ title, img, to }) => {
  return (
    <div className="card m-3 shadow card-link-pop ">
      <div className="position-absolute top-20 end-0 mt-2">
        <FavoriteButton />
      </div>
      <Link to={to} className="nav-link">
        <div class="row">
          <div class="col-md-3 col-sm-12 m-0">
            <img src={img} class="w-100 h-100 object-cover" alt="Card side" />
          </div>
          <div class="col">
            <div class="card-body">
              <h3 class="card-title">{title}</h3>
              <div>
                <p className="text-muted mb-1">
                  Jalan Sultan Ibrahim Off Lebuhraya Sultan Iskandar, Tanjung...
                </p>
                <p className="text-uppercase font-weight-bold badge bg-yellow">
                  $400/Month
                </p>
              </div>
              <div className="text-muted">
                <section className="d-inline-block me-3">
                  <span>5</span>
                  <FaBed className="ms-2" />
                </section>
                <section className="d-inline-block me-3">
                  <span>2</span>
                  <FaBath className="ms-2" />
                </section>
                <section className="d-inline-block me-3">
                  <span>2230 sqlmeter</span>
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
