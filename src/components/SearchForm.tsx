import { styled } from "@mui/material";
import axios from "axios";
import React, { useCallback, useState } from "react";
import SearchInput from "./Input";
// import ErrorMessage from "./ErrorMessage";
import WeatherDisplay from "./WeatherCard";

const SearcWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(5),
  gap: 10,
}));

const SearchForm = () => {
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [mainWeatherStatus, setMainWeatherStatus] = useState("");
  const [weatherStatusDescription, setWeatherStatusDescription] = useState("");
  const [weatherHumidity, setWeatherHumidity] = useState<number | undefined>();
  const [weatherVisibility, setWeatherVisibility] = useState<
    number | undefined
  >();
  const [windSpeed, setWeatherWineSpeed] = useState<number | undefined>();
  const [wicon, setWicon] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const getWeatherData = async (searchQuery: string) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/weather?q=${searchQuery}&appid=${process.env.REACT_APP_API_KEY}`,
      });

      setCity(response.data.name);
      setTemperature(Math.round(response.data.main.temp - 273.15));
      setMainWeatherStatus(response.data.weather[0].main);
      setWeatherStatusDescription(response.data.weather[0].description);
      setWeatherHumidity(response.data.main.humidity);
      setWeatherVisibility(
        parseFloat((response.data.visibility / 1000).toString())
      );
      setWeatherWineSpeed(response.data.wind.speed);
      setWicon(response.data.weather[0].icon);
      setSearchPerformed(true);

      console.log(response.data.visibility);
    } catch (error) {
      setSearchError("Please type a correct city");
      console.error("Please type a correct city");
    }
  };

  const handleOnChangeCity = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const handleSearchClick = useCallback(async () => {
    try {
      const encodedCity = encodeURIComponent(searchQuery);
      await getWeatherData(encodedCity);
    } catch (error) {
      console.error("Please type a correct city");
    }
  }, [searchQuery]);

  return (
    <SearcWrapper>
      <SearchInput
        value={searchQuery}
        onChange={handleOnChangeCity}
        onClick={handleSearchClick}
        onPressEnter={handleSearchClick}
      />
      {/* {searchError && <ErrorMessage message={searchError} />} */}
      {searchPerformed && !searchError && (
        <WeatherDisplay
          city={city}
          mainWeatherStatus={mainWeatherStatus}
          weatherStatusDescription={weatherStatusDescription}
          temperature={temperature}
          weatherVisibility={weatherVisibility}
          windSpeed={windSpeed}
          weatherHumidity={weatherHumidity}
        />
      )}
    </SearcWrapper>
  );
};

export default SearchForm;
