
import Image from "next/image";

import sunIcon from "@/public/assets/images/icon-sunny.webp";
import drizzleIcon from "@/public/assets/images/icon-drizzle.webp";
import fogIcon from "@/public/assets/images/icon-fog.webp"
import overcastIcon from "@/public/assets/images/icon-overcast.webp"
import rainIcon from "@/public/assets/images/icon-rain.webp"
import snowIcon from "@/public/assets/images/icon-snow.webp"
import stormIcon from "@/public/assets/images/icon-storm.webp"


const HourlyForcast = () => {
  return (
    <div className='flex flex-col bg-neutral-800 rounded-xl px-6 py-6 gap-4 w-80'>
        <div className="flex items-center justify-between">
            <h3 className="text-[18px]">Hourly Forcast</h3>

            <button className="flex items-center gap-2 bg-neutral-600 rounded-md px-3 py-2 cursor-pointer">
            
                <p className="text-sm">Tuesday</p>
            
                <Image src={"/assets/images/icon-dropdown.svg"} width={14} height={14} alt="dropdown"/>
            </button>
        </div>

        <div className="flex w-full justify-between items-center bg-neutral-700 border border-neutral-600 rounded-md py-1 px-2">
            <div className="flex items-center gap-1">
                <Image src={sunIcon} width={40} height={40} alt=""/>

                <h3 className="pt-0.5">5 PM</h3>
            </div>

            <h4 className="mr-2 pt-0.5">20°</h4>
        </div>
        
        
    </div>
  )
}

export default HourlyForcast