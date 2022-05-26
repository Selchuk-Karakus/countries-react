import React from "react";

const RegionDropdownMenu = (props) => {

  return (
    <div className="dropdown-menu">
      <select onChange={props.handleOnChange}>
        <option value="filter by region" >Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default RegionDropdownMenu;