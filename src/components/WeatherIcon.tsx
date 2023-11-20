import React, { FC } from "react";
import { WeatherIconList } from "./WeatherIconsList";

interface IProps {
  mainWeatherStatus: string;
  sunriseTimestamp?: number;
  sunsetTimestamp?: number;
}

export const WeatherIcon: FC<IProps> = ({ mainWeatherStatus }) => {
  const status = mainWeatherStatus.toLowerCase();
  const SelectedIcon = WeatherIconList[status];

  return (
    <div key={status}>
      {SelectedIcon && <SelectedIcon width="250px" height="250px" />}
    </div>
  );
};
