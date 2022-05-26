import React, { useState, useEffect } from "react";
import "./App.css";
import countriesData from "./data/countries-data.json";
import SearchBar from "./SearchBar";
import CountriesDetail from "./CountriesDetail";
import RegionDropdownMenu from "./RegionDropdownMenu";

function App() {
  const [inputField, setInputField] = useState("");
  const [countries, setCountries] = useState(countriesData);
  const [region, setRegion] = useState("filter by region");

  const handleInputFieldOnChange = (e) => {
    e.preventDefault();
    setInputField(e.target.value);
  };

  const handleSelectFieldOnChange = (e) => {
    const value = e.target.value.toLowerCase();
    setRegion(value)
  };

  useEffect(() => {
    const updatedCountries = countriesData.filter((country) => {
      return (
       (country.name.toLowerCase().indexOf(inputField.toLowerCase()) !== -1 ||
        country.capital.toLowerCase().indexOf(inputField.toLowerCase()) !==
          -1) &&
        (region === "filter by region" || country.region.toLowerCase() === region)
      );
    });
    setCountries(updatedCountries);
  }, [inputField, region]);

  return (
    <div className="main-container">
      <SearchBar handleOnChange={handleInputFieldOnChange} input={inputField} />
      <RegionDropdownMenu handleOnChange={handleSelectFieldOnChange} />
      <CountriesDetail countries={countries} />
    </div>
  );
}

export default App;
