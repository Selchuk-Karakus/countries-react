import React from "react";

const CountriesDetail = (props) => {
  return props.countries.map(
    ({ name, population, region, capital, flag }, index) => {
      return (
        <div className="country-detail-container" key={index}>
          <img src="https://images.unsplash.com/photo-1604948067797-fe4288ffef04?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1215" alt="countries flags"/>
          <div className="country">
            <h3>{name}</h3>
            <p>
              <span>Population:</span>{" "}
              {population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </p>
            <p>
              <span>Region:</span>
              {region}
            </p>
            <p>
              <span>Capital:</span> {capital}{" "}
            </p>
          </div>
        </div>
      );
    }
  );
};

export default CountriesDetail;
