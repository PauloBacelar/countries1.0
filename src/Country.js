import React from "react";

function Country(props) {
  return (
    <div className="country">
      <h2>
        {props.countryName} - {props.countryAbbreviation}
      </h2>
      <img src={props.countryFlag} />
    </div>
  );
}

export default Country;
