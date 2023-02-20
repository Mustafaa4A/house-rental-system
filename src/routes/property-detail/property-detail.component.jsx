import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import PageBody from "../../components/page-body/page-body.component";
import PageHeader from "../../components/page-header/page-header.component";
import Button from "../../components/button/button.component";
import FavoriteIcon from "../../components/favorite-icon/favorite-icon.component";
import ShareButton from "../../components/share-button/share-button.component";
import Column from "../../components/column/column.component";

import { BiBuildingHouse } from "react-icons/bi";
import { BsBuilding, BsTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { FiDollarSign } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

import { PropertiesContext } from "../../contexts/properties.context";
import { UserContext } from "../../contexts/user.context";
import { PaymentContext } from "../../contexts/payment.context";

const PropertyDetail = () => {
  const { houseID } = useParams();
  const { properties } = useContext(PropertiesContext);
  const [property, setProperty, calculateTotal, discountPercent, tax] =
    useState([]);

  const { setPrice } = useContext(PaymentContext);
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    setProperty(properties.find((property) => property.id === Number(houseID)));
  }, [houseID, properties, property, setProperty]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [houseID, properties, property, setProperty]);

  const book = () => {
    setPrice(property.price);
    navigate("/booking");
  };
  return (
    <div className="page-wrapper">
      <PageHeader>
        <div className="page-pretitle">
          <Link to={"/"}>Home</Link> {">"}
          <Link to={"/properties"}>Properties</Link>
        </div>
      </PageHeader>
      {property && (
        <PageBody>
          <div className="bg-transparent shadow-none">
            <div className="card-body position-relative">
              <div className="position-absolute top-0 end-0">
                <ShareButton />
                <FavoriteIcon property={property} />
              </div>
              <h1>
                <BiBuildingHouse /> {property.name}
              </h1>
              <h4 className="card-text text-muted">{property.description}</h4>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4 h-100">
                <img
                  src={property.img}
                  alt=""
                  srcset=""
                  className="w-100 h-100 object-cover"
                />
              </div>
              <div className="col">
                <h1>Overview</h1>
                <Column
                  property={"Price"}
                  value={property.price}
                  icon={<FiDollarSign />}
                  col={12}
                />
                <Column
                  property={"Location"}
                  value={property.location}
                  icon={<GrMapLocation />}
                  col={12}
                />
                <Column
                  property={"Area"}
                  value={`${property.squareArea} square meter`}
                  icon={<BsBuilding />}
                  col={12}
                />
                <Column
                  property={"Owner"}
                  value={property.owner}
                  icon={<GoPerson />}
                  col={12}
                />
                <Column
                  property={"Contact"}
                  value={property.ownerContact}
                  icon={<BsTelephoneFill />}
                  col={12}
                />
              </div>
            </div>
            <div className="row mt-4 mb-2">
              <div className="col-md-8">
                <h1 className="mb-3">Details</h1>
                <div className="row">
                  <Column property={"Property ID"} value={property.id} />
                  <Column property={"Property Name"} value={property.name} />
                  <Column property={"Property Type"} value={property.type} />
                  <Column property={"Build Year"} value={property.buildYear} />
                  <Column
                    property={"Total Rooms"}
                    value={property.totalRooms}
                  />
                  <Column property={"Bedroom"} value={property.bedrooms} />
                  <Column property={"Bathroom"} value={property.bathrooms} />
                  <Column property={"Kitchen"} value={property.kitchen} />
                  <Column property={"Toilet"} value={property.toilet} />
                  <Column property={"Parking"} value={property.parking} />
                  <Column property={"Distinct"} value={property.distinct} />
                  <Column property={"Zone"} value={property.zone} />
                </div>
              </div>
            </div>
            <div className="btn-list mt-4">
              {currentUser ? (
                <button className="btn btn-success w-50" onClick={book}>
                  Book Property
                </button>
              ) : (
                <button className="btn btn-success w-50" disabled>
                  Book Property
                </button>
              )}
            </div>
          </div>
        </PageBody>
      )}
    </div>
  );
};

export default PropertyDetail;
