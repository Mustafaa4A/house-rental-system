import { Link, useParams } from "react-router-dom";
import PageBody from "../../components/page-body/page-body.component";
import PageHeader from "../../components/page-header/page-header.component";
import { BiBuildingHouse } from "react-icons/bi";
import { BsBuilding, BsTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { FiDollarSign } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import data from "../../properties.json";
import { useState } from "react";
import Column from "../../components/column/column.component";
import Button from "../../components/button/button.component";
import FavoriteButton from "../../components/favorite-button/favorite-button.component";
import ShareButton from "../../components/share-button/share-button.component";

const PropertyDetail = () => {
  const { houseID } = useParams();
  const [property, setPeropert] = useState(data[houseID]);

  return (
    <div className="page-wrapper">
      <PageHeader>
        <div className="page-pretitle">
          <Link to={"/"}>Home</Link> {">"}
          <Link to={"/properties"}>Properties</Link>
        </div>
      </PageHeader>
      <PageBody>
        <div className="bg-transparent shadow-none">
          <div className="card-body position-relative">
            <div className="position-absolute top-10 end-0">
              <ShareButton />
              <FavoriteButton />
            </div>
            <h1>
              <BiBuildingHouse /> {property.title}
            </h1>
            <h4 className="card-text text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quaerat ad quia? Itaque,
            </h4>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img
                src={property.img}
                alt=""
                srcset=""
                className="card-img-top"
              />
            </div>
            <div className="col">
              <h1>Overview</h1>
              <Column
                property={"Price"}
                value={300}
                icon={<FiDollarSign />}
                col={12}
              />
              <Column
                property={"Location"}
                value={`Howlwadaag`}
                icon={<GrMapLocation />}
                col={12}
              />
              <Column
                property={"Area"}
                value={`${430} square meter`}
                icon={<BsBuilding />}
                col={12}
              />
              <Column
                property={"Owner"}
                value={"Owliya Khaliif"}
                icon={<GoPerson />}
                col={12}
              />
              <Column
                property={"Contact"}
                value={"+252 6176 787 777"}
                icon={<BsTelephoneFill />}
                col={12}
              />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-8">
              <h1 className="mb-3">Details</h1>
              <div className="row">
                <Column property={"Property ID"} value={property.id} />
                <Column property={"Property Name"} value={property.title} />
                <Column property={"Property Type"} value={property.title} />
                <Column property={"Build Year"} value={2019} />
                <Column property={"Total Rooms"} value={7} />
                <Column property={"Bedroom"} value={3} />
                <Column property={"Bathroom"} value={1} />
                <Column property={"Kitchen"} value={1} />
                <Column property={"Toilet"} value={2} />
                <Column property={"Distinct"} value={"Karan"} />
                <Column property={"Zone"} value={"Argentin"} />
              </div>
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default PropertyDetail;
