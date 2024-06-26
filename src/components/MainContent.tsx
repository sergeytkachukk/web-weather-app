import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material";
import axios from "axios";
import { ErrorCard } from "./ErrorCard";
import { SearchInput } from "./SearchInput";
import { WeatherCard } from "./WeatherCard";
import CircularProgress from "@mui/material/CircularProgress";

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(5),
  gap: theme.spacing(3),
}));

interface WeatherData {
  city: string;
  temperature: number;
  mainWeatherStatus: string;
  weatherStatusDescription: string;
  weatherHumidity: number;
  weatherVisibility: number;
  windSpeed: number;
}

export const MainContent = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getWeatherData = useCallback(
    async (query: string, lat?: number, lon?: number) => {
      setLoading(true);
      setSearchError(null);
      try {
        let url = `${process.env.REACT_APP_API_URL}/weather?appid=${process.env.REACT_APP_API_KEY}`;
        if (lat && lon) {
          url += `&lat=${lat}&lon=${lon}`;
        } else {
          url += `&q=${encodeURIComponent(query)}`;
        }
        const response = await axios.get(url);
        const weatherData = response.data;
        const KELVIN_TO_CELSIUS = 273.15;

        setWeatherData({
          city: weatherData.name,
          temperature: Math.round(weatherData.main.temp - KELVIN_TO_CELSIUS),
          mainWeatherStatus: weatherData.weather[0].main,
          weatherStatusDescription: weatherData.weather[0].description,
          weatherHumidity: weatherData.main.humidity,
          weatherVisibility: parseFloat(
            (weatherData.visibility / 1000).toFixed(1)
          ),
          windSpeed: weatherData.wind.speed,
        });
        setSearchPerformed(true);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setSearchError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const requestLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeatherData(
            "",
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.error("Error obtaining location", error);
          setSearchError("Location access denied.");
        }
      );
    } else {
      setSearchError("Geolocation is not supported by this browser.");
    }
  }, [getWeatherData]);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  return (
    <Content>
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onClick={() => getWeatherData(searchQuery)}
        onPressEnter={() => getWeatherData(searchQuery)}
      />

      {loading && <CircularProgress />}

      {searchError && !searchPerformed ? (
        <ErrorCard message={searchError} />
      ) : (
        searchPerformed &&
        weatherData && (
          <WeatherCard
            city={weatherData.city}
            mainWeatherStatus={weatherData.mainWeatherStatus}
            weatherStatusDescription={weatherData.weatherStatusDescription}
            temperature={weatherData.temperature}
            weatherVisibility={weatherData.weatherVisibility}
            windSpeed={weatherData.windSpeed}
            weatherHumidity={weatherData.weatherHumidity}
          />
        )
      )}
    </Content>
  );
};
