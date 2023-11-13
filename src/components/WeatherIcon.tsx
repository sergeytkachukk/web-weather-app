import React from "react";
import { WeatherIconList } from "./WeatherIconsList";

interface IProps {
  mainWeatherStatus: string;
}

export const WeatherIcon: React.FC<IProps> = ({ mainWeatherStatus }) => {
  const status = mainWeatherStatus.toLowerCase();
  const SelectedIcon = WeatherIconList[status];
  console.log(status, "status", SelectedIcon);

  return (
    <div key={status}>
      {SelectedIcon && <SelectedIcon width="250px" height="250px" />}
    </div>
  );
};
