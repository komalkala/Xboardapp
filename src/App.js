import React, { useState, useEffect } from "react";


function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const imageStyle = {
    width: "100px",
    height: "100px",
  };
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <div style={containerStyle}>
      {/* <h1>Country Flags</h1> */}
      {/* <div className="countryArea"> */}
      {/* {error && <p>Error: {error}</p>} */}
      {countries.map((country) => (
        <div style={cardStyle} key={country.name.common}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={imageStyle}
          />
          <p>{country.name.common}</p>
        </div>
      ))}
    </div>
    // </div>
  );
}

export default App;
