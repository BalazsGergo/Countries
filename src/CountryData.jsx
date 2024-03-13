import { Button } from "@mui/material";
function CountryData({ country, deleteCountryData }) {
  return (
    <>
      <div className="countryData">
        <h2>Official Name: {country.name.official}</h2>
        <img src={country.flags.png} alt="country's flag" />
        <h4>Capital: {country.capital}</h4>
        <h5>Status: {country.status}</h5>
        <p>Capital: {country.capital}</p>
        {country.borders ? (
          <p>Borders: {country.borders.join(", ")},</p>
        ) : (
          <p>Borders: No borders</p>
        )}
        <p>Population: {country.population}</p>
        <p>Continent: {country.continents}</p>
        <Button variant="contained" onClick={deleteCountryData}>
          Back
        </Button>
      </div>
    </>
  );
}

export default CountryData;
