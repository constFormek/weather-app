import Image from "next/image";

import sunIcon from "@/public/assets/images/icon-sunny.webp";
import drizzleIcon from "@/public/assets/images/icon-drizzle.webp";
import fogIcon from "@/public/assets/images/icon-fog.webp";
import overcastIcon from "@/public/assets/images/icon-overcast.webp";
import rainIcon from "@/public/assets/images/icon-rain.webp";
import snowIcon from "@/public/assets/images/icon-snow.webp";
import stormIcon from "@/public/assets/images/icon-storm.webp";
import partlyCloudyIcon from "@/public/assets/images/icon-partly-cloudy.webp"

const iconMap = {
    sunny: sunIcon,
    drizzle: drizzleIcon,
    fog: fogIcon,
    overcast: overcastIcon,
    rain: rainIcon,
    snow: snowIcon,
    storm: stormIcon,
    "partly-cloudy": partlyCloudyIcon,
};

type iconType = 
| "sunny"
| "drizzle"
| "fog"
| "overcast"
| "rain"
| "snow"
| "storm"
| "partly-cloudy"

interface HourlyForecastElementProps {
    iconName: iconType, // image url
    hour: number,
    timePeriod: "am" | "pm",
    temp: number,
}

const HourlyForecastElement = ({iconName, hour, timePeriod, temp} : HourlyForecastElementProps) => {
    const icon = iconMap[iconName];
  return (
    <div className="flex w-full justify-between items-center bg-neutral-700 border border-neutral-600 rounded-md py-1 px-2">
        <div className="flex items-center gap-1">
            <Image src={icon} width={40} height={40} alt=""/>

            <h3 className="pt-0.5">{hour}{timePeriod}</h3>
        </div>

        <h4 className="mr-2 pt-0.5">{temp}°</h4>
    </div>
  )
}

export default HourlyForecastElement