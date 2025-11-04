"use client"

import { useState } from "react";
import UnitsMenuElement from "./UnitsMenuElement";


const UnitsMenu = () => {
    const [unitsType, setUnitsType] = useState<'metric' | 'imperial'>('metric');
  return (
    <>
        {unitsType === "imperial" ? (
            <button onClick={() => setUnitsType('metric')} className=' cursor-pointer px-2.5 py-2.5 text-[16px] hover:bg-neutral-700 transition rounded-lg w-full text-start'>
            Switch to Metric
            </button>
        ) : (
            <button onClick={() => setUnitsType('imperial')} className=' cursor-pointer px-2.5 py-2.5 text-[16px] hover:bg-neutral-700 transition rounded-lg w-full text-start'>
            Switch to Imperial
            </button>
        )}

        <UnitsMenuElement 
            category="Temperature"
            elements={[
                "Celsius (°C)",
                "Fahrenheit (°F)"
            ]}
            onClick={() => {}}
            activeElement={1}
        />

        <UnitsMenuElement 
            category="Temperature"
            elements={[
                "Celsius (°C)",
                "Fahrenheit (°F)"
            ]}
            onClick={() => {}}
            activeElement={1}
        />
    </>
  )
}

export default UnitsMenu