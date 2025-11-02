
import Image from "next/image";
import HourlyForcastElement from "./HourlyForcastElement";

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

        <HourlyForcastElement 
            iconName="sunny"
            temp={20}
            timePeriod="pm"
            hour={5}
        />
        
        <HourlyForcastElement 
            iconName="drizzle"
            temp={12}
            timePeriod="am"
            hour={1}
        />

        <HourlyForcastElement 
            iconName="partly-cloudy"
            temp={17}
            timePeriod="pm"
            hour={9}
        />

        <HourlyForcastElement 
            iconName="storm"
            temp={5}
            timePeriod="am"
            hour={8}
        />
        
    </div>
  )
}

export default HourlyForcast