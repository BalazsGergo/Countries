import CountryData from "./CountryData";
import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

export default function Countries({
  countries,
  changeShow,
  setShow,
  show,
  setSearchedCountry,
}) {
  const [countryData, setCountryData] = useState(null);

  const deleteCountryData = () => {
    setCountryData(null);
    setShow(!show);
    setSearchedCountry("");
  };

  return (
    <>
      {!countryData ? (
        countries.map((country, index) => (
          <Card
            sx={{ minWidth: 100, minHeight: 100, width: 250, height: 280 }}
            key={index}
          >
            <CardHeader title={country.name.common} />
            <CardMedia
              sx={{ width: 75, height: 50 }}
              component="img"
              image={country.flags.png}
            />
            <CardContent>
              <Button
                variant="contained"
                sx={{ fontSize: 10 }}
                onClick={() => {
                  setCountryData(country.name.common), changeShow();
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <CountryData
          deleteCountryData={deleteCountryData}
          country={countries.find(
            (country) => countryData === country.name.common
          )}
        />
      )}
    </>
  );
}