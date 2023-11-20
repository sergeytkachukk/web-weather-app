import { Box, Card, CardContent, styled } from "@mui/material";
import React, { FC } from "react";
import { WeatherBottomInfo } from "./WeatherBottomInfo";
import { WeatherIcon } from "./WeatherIcon";
import { WhiteTypography } from "./WhiteTypography";

const WeatherCardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: 15,
  padding: theme.spacing(2.5),
  width: "auto",
  height: "auto",
  backgroundColor: theme.palette.primary.dark,
}));

const CityStyling = styled(WhiteTypography)(({ theme }) => ({
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

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(1),
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

export const WeatherCard: FC<IProps> = ({
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
        <StyledBox>
          <CityStyling>{city}</CityStyling>

          <Box>
            <WhiteTypography variant="subtitle1">
              {mainWeatherStatus}
            </WhiteTypography>

            <WhiteTypography variant="subtitle1" textTransform="capitalize">
              {weatherStatusDescription}
            </WhiteTypography>
          </Box>
        </StyledBox>

        <MiddlePartStyling>
          <WhiteTypography variant="h2">{temperature}°C</WhiteTypography>

          <WeatherIcon mainWeatherStatus={mainWeatherStatus} />
        </MiddlePartStyling>

        <StyledBox>
          <WeatherBottomInfo
            title="Visibility"
            value={`${weatherVisibility}km`}
          />

          <WeatherBottomInfo title="Windspeed" value={`${windSpeed}m/s`} />

          <WeatherBottomInfo title="Humidity" value={`${weatherHumidity}%`} />
        </StyledBox>
      </CardContent>
    </WeatherCardWrapper>
  );
};
