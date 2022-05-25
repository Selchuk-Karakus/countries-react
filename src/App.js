import React, { useState, useEffect } from "react";
import "./App.css";
import countriesData from "./data/countries-data.json";
import SearchBar from "./SearchBar";
import CountriesDetail from "./CountriesDetail";

function App() {
  const [inputField, setInputField] = useState("");
  const [countries, setCountries] = useState([]);

  const handleInputFieldOnChange = (e) => {
    e.preventDefault();
    setInputField(e.target.value);
  };

  useEffect(() => {
    const updatedCountries = countriesData.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(inputField.toLowerCase()) !== -1 ||
        country.capital.toLowerCase().indexOf(inputField.toLowerCase()) !== -1
      );
    });
    setCountries(updatedCountries);
  }, [inputField]);

  return (
    <div className="main-container">
      <SearchBar handleOnChange={handleInputFieldOnChange} input={inputField} />
      <CountriesDetail countries={countries} />
    </div>
  );
}

export default App;
