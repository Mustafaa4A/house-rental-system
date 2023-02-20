import { Fragment } from "react";
import Button from "../button/button.component";
import InputText from "../imput-text/input-text.component";
import Dropdown from "../dropdown/dropdown.component";
import Divider from "../divider/divider.component";
import { useState, useContext } from "react";
import { PropertiesContext } from "../../contexts/properties.context";

const DEFAULT_FORM = {
  min: "",
  max: "",
};

const FilterByPrice = ({ filterData }) => {
  const [formInputs, setFormInputs] = useState(DEFAULT_FORM);
  const { min, max } = formInputs;

  const { properties } = useContext(PropertiesContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  //submit button to filter the data in the properties context
  const submitHandler = (e) => {
    e.preventDefault();
    if (min !== "" || max !== "")
      filterData(
        properties.filter(({ price }) => price >= min && price <= max)
      );
  };

  //reset form
  const resetHandler = (e) => {
    e.preventDefault();
    setFormInputs(DEFAULT_FORM);
    filterData(properties.map((item) => item));
  };

  return (
    <Fragment>
      <Button data-bs-toggle="dropdown">Filter by price</Button>
      <Dropdown style={{ width: "350px" }}>
        <form onSubmit={submitHandler} className="p-2">
          <div className="row mb-3">
            <h5>Price</h5>
            <div className="col-md-6">
              <InputText
                label={"Minimum"}
                text="$"
                type="number"
                min="0"
                placeholder="Min"
                name="min"
                value={min}
                onChange={changeHandler}
              />
            </div>
            <div className="col-md-6">
              <InputText
                label={"Maximum"}
                text="$"
                type="number"
                min="0"
                placeholder="Max"
                name="max"
                value={max}
                onChange={changeHandler}
              />
            </div>
          </div>
          <Divider />
          <div className="mt-2 row p-2">
            <button
              type="submit"
              className="btn btn-link text-danger col-6"
              onClick={resetHandler}
            >
              clear
            </button>
            <button type="submit" className="btn btn-danger text-white col-6">
              Apply Filter
            </button>
          </div>
        </form>
      </Dropdown>
    </Fragment>
  );
};

export default FilterByPrice;
