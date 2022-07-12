import Button from "../../components/button/button.component";
import PropertyCard from "../../components/property-card/property-card.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import data from "../../properties.json";
import InputText from "../../components/imput-text/input-text.component";
import PageHeader from "../../components/page-header/page-header.component";
import PageBody from "../../components/page-body/page-body.component";

const Properties = () => {
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
                <Button data-bs-toggle="dropdown">Filter by type</Button>
                <Dropdown>Choose type</Dropdown>
              </div>

              <div class="d-sm-inline">
                <Button data-bs-toggle="dropdown">Filter by price</Button>
                <Dropdown>
                  <form action="">
                    <div className="row p-2 m-2 mb-0">
                      <h5>Price</h5>
                      <div className="col-md-6">
                        <InputText
                          label={"Minimum"}
                          text="$"
                          placeholder="Min"
                          name={"min"}
                        />
                      </div>
                      <div className="col-md-6">
                        <InputText
                          label={"Maximum"}
                          text="$"
                          placeholder="Max"
                          name={"max"}
                        />
                      </div>
                    </div>
                    <hr />
                    <button type="reset" className="btn btn-link text-danger">
                      clear
                    </button>
                    <button
                      type="submit"
                      className="btn btn-danger text-white float-left"
                    >
                      Apply Filter
                    </button>
                  </form>
                </Dropdown>
              </div>

              <div class="d-sm-inline">
                <Button data-bs-toggle="dropdown">Filter by Bedroom</Button>
                <Dropdown>Choose type</Dropdown>
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      <PageBody>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            {data.map((property) => (
              <PropertyCard
                key={property.id}
                to={`/properties/${property.id}`}
                title={property.title}
                img={property.img}
              />
            ))}
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default Properties;
