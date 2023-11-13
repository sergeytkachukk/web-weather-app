import { styled } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { ErrorCard } from "./ErrorCard";
import { SearchInput } from "./SearchInput";
import { WeatherCard } from "./WeatherCard";

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(5),
  gap: theme.spacing(3),
}));

export const MainContent = () => {
  const [temperature, setTemperature] = useState(0);
  const [city, setCity] = useState("");
  const [mainWeatherStatus, setMainWeatherStatus] = useState("");
  const [weatherStatusDescription, setWeatherStatusDescription] = useState("");
  const [weatherHumidity, setWeatherHumidity] = useState<number | undefined>();
  const [weatherVisibility, setWeatherVisibility] = useState<
    number | undefined
  >();
  const [windSpeed, setWeatherWineSpeed] = useState<number | undefined>();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const getWeatherData = async (searchQuery: string) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/weather?q=${searchQuery}&appid=${process.env.REACT_APP_API_KEY}`,
      });

      const weatherData = response.data;
      const KELVIN_TO_CELSIUS = 273.15;
      const convertVisibility = (visibility: number) =>
        parseFloat((visibility / 1000).toString());

      setCity(weatherData.name);
      setTemperature(Math.round(weatherData.main.temp - KELVIN_TO_CELSIUS));
      setMainWeatherStatus(weatherData.weather[0].main);
      setWeatherStatusDescription(weatherData.weather[0].description);
      setWeatherHumidity(weatherData.main.humidity);
      setWeatherVisibility(convertVisibility(weatherData.visibility));
      setWeatherWineSpeed(weatherData.wind.speed);
      setSearchPerformed(true);
    } catch (error) {
      setSearchError("Please type a correct city");
    }
  };

  const handleOnChangeCity = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const handleSearchClick = useCallback(() => {
    const encodedCity = encodeURIComponent(searchQuery);
    getWeatherData(encodedCity);
    setSearchError(null);
  }, [searchQuery]);

  useEffect(() => {
    if (searchError) {
      setSearchPerformed(false); // Reset the searchPerformed state
    }
  }, [searchError]);

  return (
    <Content>
      <SearchInput
        value={searchQuery}
        onChange={handleOnChangeCity}
        onClick={handleSearchClick}
        onPressEnter={handleSearchClick}
      />

      {searchError && !searchPerformed ? (
        <ErrorCard message={searchError} />
      ) : (
        searchPerformed && (
          <WeatherCard
            city={city}
            mainWeatherStatus={mainWeatherStatus}
            weatherStatusDescription={weatherStatusDescription}
            temperature={temperature}
            weatherVisibility={weatherVisibility}
            windSpeed={windSpeed}
            weatherHumidity={weatherHumidity}
          />
        )
      )}
    </Content>
  );
};
