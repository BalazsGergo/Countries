import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./Countries";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import { TextField } from "@mui/material";

function App() {
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState("Sort A-Z");
  const [searchedCountry, setSearchedCountry] = useState("");

  const changeShow = () => {
    setShow(true);
  };

  const handleSort = () => {
    const sortedCountries = [...countries].sort((a, b) => {
      return sortBy === "Sort A-Z"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });

    setCountries(sortedCountries);
    setSortBy(sortBy === "Sort A-Z" ? "Sort Z-A" : "Sort A-Z");
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

        {findCountry.length === 0 ? "Please wait while we load the content." : null}
      </div>
    </>
  );
}

export default App;

