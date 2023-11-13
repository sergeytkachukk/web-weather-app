import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import React from "react";
import { WeatherIcon } from "./WeactherIcon";

const WeatherCardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(2.5),
  width: 400,
  height: 600,
  backgroundColor: "#fff",
}));

const CityStyling = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  fontSize: theme.spacing(4),
}));

const MiddlePartStyling = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(5, 3, 5, 3),
}));

const BottomData = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(2, 1, 2, 1),
}));

interface IProps {
  city: string;
  mainWeatherStatus: string;
  weatherStatusDescription: string;
  temperature: number;
  weatherVisibility: number | undefined;
  windSpeed: number | undefined;
  weatherHumidity: number | undefined;
  wicon: string;
}

export const WeatherCard: React.FC<IProps> = ({
  city,
  mainWeatherStatus,
  weatherStatusDescription,
  temperature,
  weatherVisibility,
  windSpeed,
  weatherHumidity,
  wicon,
}) => {
  return (
    <WeatherCardWrapper>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CityStyling>{city}</CityStyling>

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

        <MiddlePartStyling>
          <Typography variant="h2">{temperature}°C</Typography>

          <WeatherIcon mainWeatherStatus={mainWeatherStatus} />
        </MiddlePartStyling>

        <Box display="flex" textAlign="center">
          <BottomData>Visibility {weatherVisibility}km</BottomData>

          <BottomData>Windspeed {windSpeed}m/s</BottomData>

          <BottomData>Humidity {weatherHumidity}%</BottomData>
        </Box>
      </CardContent>
    </WeatherCardWrapper>
  );
};
