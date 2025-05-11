import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

const CountrySearch = () => {
  const API_URL =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country?.common?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <div style={cardContainerStyle}>
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.common}
            name={country.common}
            imgUrl={country.png}
          />
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  backgroundColor: "#f0f0f0",
};

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

export default CountrySearch;
