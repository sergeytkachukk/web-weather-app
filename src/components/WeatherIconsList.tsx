import { ReactComponent as ClearIcon } from "../assets/clear-day.svg";
import { ReactComponent as CloudyIcon } from "../assets/cloudy.svg";
import { ReactComponent as RainIcon } from "../assets/rain.svg";
import { ReactComponent as FogIcon } from "../assets/fog.svg";
import { ReactComponent as MistIcon } from "../assets/mist.svg";
import { ReactComponent as SnowIcon } from "../assets/snow.svg";
import { ReactComponent as DrizzleIcon } from "../assets/drizzle.svg";

interface WeatherIconList {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const WeatherIconList: WeatherIconList = {
  clear: ClearIcon,
  clouds: CloudyIcon,
  rain: RainIcon,
  fog: FogIcon,
  mist: MistIcon,
  snow: SnowIcon,
  drizzle: DrizzleIcon,
};
