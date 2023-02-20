import { useState, useContext } from "react";

import Button from "../../components/button/button.component";
import PropertyCard from "../../components/property-card/property-card.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import PageHeader from "../../components/page-header/page-header.component";
import PageBody from "../../components/page-body/page-body.component";
import FilterByLocation from "../../components/filter-by-location/filter-by-location.component";
import FilterByPrice from "../../components/filter-by-price/filter-by-price.component";

import { PropertiesContext } from "../../contexts/properties.context";
import { useEffect } from "react";

const Properties = () => {
  const { properties } = useContext(PropertiesContext);
  const [propertiesData, setPropertiesData] = useState(properties);

  const filter = (filteredData) => {
    setPropertiesData(filteredData);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <PageHeader>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="page-pretitle">Hame {">"} Properties</div>
            <div className="page-title">Properties</div>
          </div>
          <div className="col-12 col-md-auto ms-auto d-print-non">
            <div className="btn-list">
              <div class="d-sm-inline">
                <FilterByPrice filterData={filter} />
              </div>

              <div class="d-sm-inline">
                <FilterByLocation filterData={filter} />
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      <PageBody>
        <div className="row">
          <div className="col-lg-12 col-md-1"></div>
          <div className="col-lg-8 col-md-10 col-sm-12">
            {propertiesData.map((property) => (
              <PropertyCard
                key={property.id}
                to={`/properties/${property.id}`}
                property={property}
              />
            ))}
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default Properties;
