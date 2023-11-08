import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";

const WeatherCardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(3.5),
  width: 300,
  height: 350,
  backgroundColor: "#dae3fd",
}));

const BottomData = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(2, 1, 2, 1),
}));

const TemperatureStyling = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(5, 3, 5, 3),
  fontSize: theme.spacing(6),
}));

interface IProps {
  city: string;
  mainWeatherStatus: string;
  weatherStatusDescription: string;
  temperature: number;
  weatherVisibility: number | undefined;
  windSpeed: number | undefined;
  weatherHumidity: number | undefined;
}

const WeatherDisplay: React.FC<IProps> = ({
  city,
  mainWeatherStatus,
  weatherStatusDescription,
  temperature,
  weatherVisibility,
  windSpeed,
  weatherHumidity,
}) => {
  return (
    <WeatherCardWrapper>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">{city}</Typography>

          <Box>
            <Typography variant="subtitle1" color="text.secondary">
              {mainWeatherStatus}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              textTransform="capitalize"
            >
              {weatherStatusDescription}
            </Typography>
          </Box>
        </Box>

        <TemperatureStyling>{temperature}°C</TemperatureStyling>

        <Box display="flex" textAlign="center">
          <BottomData>Visibility {weatherVisibility}km</BottomData>

          <BottomData>Windspeed {windSpeed}m/s</BottomData>

          <BottomData>Humidity {weatherHumidity}%</BottomData>
        </Box>
      </CardContent>
    </WeatherCardWrapper>
  );
};

export default WeatherDisplay;
