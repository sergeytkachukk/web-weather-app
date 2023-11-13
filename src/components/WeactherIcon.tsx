import React from "react";
import { ReactComponent as ClearIcon } from "../assets/clear-day.svg";
import { ReactComponent as CloudyIcon } from "../assets/cloudy.svg";
import { ReactComponent as RainIcon } from "../assets/rain.svg";
import { ReactComponent as FogIcon } from "../assets/fog.svg";
import { ReactComponent as MistIcon } from "../assets/mist.svg";
import { ReactComponent as SnowIcon } from "../assets/snow.svg";

interface StatusToIcon {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const statusToIcon: StatusToIcon = {
  clear: ClearIcon,
  clouds: CloudyIcon,
  rain: RainIcon,
  fog: FogIcon,
  mist: MistIcon,
  snow: SnowIcon,
};

interface IProps {
  mainWeatherStatus: string;
}

export const WeatherIcon: React.FC<IProps> = ({ mainWeatherStatus }) => {
  const status = mainWeatherStatus.toLowerCase();

  console.log(status, "status");
  const SelectedIcon = statusToIcon[status];

  return <div>{SelectedIcon && <SelectedIcon width="250" height="250" />}</div>;
};
