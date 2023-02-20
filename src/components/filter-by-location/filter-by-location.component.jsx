import { Fragment, useContext, useState, useEffect } from "react";

import SearchInput from "..//search-input/search-input.component";
import { PropertiesContext } from "../../contexts/properties.context";

const FilterByLocation = ({ filterData }) => {
  const { properties } = useContext(PropertiesContext);
  const [searchText, setSearchText] = useState("");

  const onSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const newData = properties.filter(
      (property) =>
        property.location.toLowerCase().includes(searchText) ||
        property.distinct.toLowerCase().includes(searchText) ||
        property.zone.toLowerCase().includes(searchText)
    );
    filterData(newData);
  }, [searchText, properties]);

  return (
    <Fragment>
      <SearchInput
        list="location"
        placeholder="Search by Location"
        name="search"
        value={searchText}
        onChange={onSearchChange}
      />
      <datalist id="location">
        <option value="Howlwadaag" />
        <option value="Kaxda" />
        <option value="Shibis" />
        <option value="Boondhere" />
        <option value="Warta Navada" />
      </datalist>
    </Fragment>
  );
};

export default FilterByLocation;
