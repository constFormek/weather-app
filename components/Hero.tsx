
import Image from "next/image"
import heroLg from "@/public/assets/images/bg-today-large.svg"
import heroSm from "@/public/assets/images/bg-today-small.svg"

import sunIcon from "@/public/assets/images/icon-sunny.webp"

const Hero = () => {
  return (
    <div className='relative w-fit '>
        <Image src={heroLg} width={800} height={286} alt="" className="hidden lg:block"/>
        <Image src={heroSm} alt="" width={343} height={286} className="lg:hidden"/>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center lg:justify-between lg:flex-row w-full px-10">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold">Berlin, Germany</h1>
                <p className="text-neutral-0/80 font-thin text-center lg:text-left">Tuesday, Aug 5, 2025</p>
            </div>

            <div className="flex gap-2 items-center">
                <Image src={sunIcon} alt="" width={100} height={50} />
                
                <h2 className="text-[6rem] font-dmSans italic">20°</h2>
            </div>
        </div>
    </div>
  )
}

export default Hero