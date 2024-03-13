import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./Countries";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";

function App() {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState("asc");
  const [searchedCountry, setSearchedCountry] = useState("");

  const changeShow = () => {
    setShow(true);
  };

  const handleSort = () => {
    const sortedCountries = [...countries].sort((a, b) => {
      return sortBy === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });

    setCountries(sortedCountries);
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  const handleInputChange = (e) => {
    setTimeout(() => {
      setSearchedCountry(e.target.value);
    }, 300);
  };

  const findCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchedCountry.toLowerCase())
  );

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <Navbar />
      {!show && (
        <div className="actions">
          <TextField
            id="home"
            label="Search"
            type="text"
            onChange={handleInputChange}
          />
          <Button onClick={handleSort} variant="contained">
            {sortBy}
          </Button>
        </div>
      )}

      <div className="main">
        {countries ? (
          <Countries
            setSearchedCountry={setSearchedCountry}
            show={show}
            setShow={setShow}
            changeShow={changeShow}
            baseCountries={countries}
            setCountries={setCountries}
            countries={findCountry}
          />
        ) : null}

        {findCountry.length === 0 ? "No countries, please wait" : null}
      </div>
    </>
  );
}

export default App;

