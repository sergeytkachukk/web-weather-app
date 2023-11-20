import { ReactComponent as ClearDayIcon } from "../assets/clear-day.svg";
import { ReactComponent as ClearNightIcon } from "../assets/clear-night.svg";
import { ReactComponent as CloudyIcon } from "../assets/cloudy.svg";
import { ReactComponent as RainIcon } from "../assets/rain.svg";
import { ReactComponent as FogIcon } from "../assets/fog.svg";
import { ReactComponent as MistIcon } from "../assets/mist.svg";
import { ReactComponent as SnowIcon } from "../assets/snow.svg";
import { ReactComponent as DrizzleIcon } from "../assets/drizzle.svg";
import { ReactComponent as ThunderstormsIcon } from "../assets/thunderstorms-day-rain.svg";

interface WeatherIconList {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const WeatherIconList: WeatherIconList = {
  clear: ClearDayIcon,
  clearNight: ClearNightIcon,
  clouds: CloudyIcon,
  rain: RainIcon,
  fog: FogIcon,
  mist: MistIcon,
  snow: SnowIcon,
  drizzle: DrizzleIcon,
  thunderstorm: ThunderstormsIcon,
};
