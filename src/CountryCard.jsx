import React from "react";

const CountryCard = ({ name, imgUrl }) => {
  return (
    <div className="countryCard" style={cardStyle}>
      <img src={imgUrl} alt={name} style={imgStyle} />
      <h2>{name}</h2>
    </div>
  );
};

const cardStyle = {
  width: "150px",
  height: "150px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
};

const imgStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
};

export default CountryCard;
