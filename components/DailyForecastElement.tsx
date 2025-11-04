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
| "partly-cloudy";

interface DailyForecastElementProps {
  iconName: iconType,
  day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
  tempDay: number,
  tempNight: number
}

const DailyForecastElement = ({ iconName, day, tempDay, tempNight}: DailyForecastElementProps) => {
  const icon = iconMap[iconName];
  const validatedDay = day.substring(0,3).charAt(0).toUpperCase() + day.slice(1, 3);
  return (
    <div className="flex flex-col gap-2 bg-neutral-800 hover:bg-neutral-700 transition border border-neutral-600 rounded-xl px-2 py-3 w-25 items-center">
      <h3 className="text-center text-[18px]">{validatedDay}</h3>

      <Image src={icon} alt="" width={50} height={50}/>

      <div className="flex justify-between items-center w-full">
        <p>{tempDay}°</p>

        <p>{tempNight}°</p>
      </div>
    </div>
  )
}

export default DailyForecastElement;