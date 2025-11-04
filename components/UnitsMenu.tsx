"use client"

import { useState } from "react";
import UnitsMenuElement from "./UnitsMenuElement";


const UnitsMenu = () => {
    const [isMetric, setIsMetric] = useState<boolean>(true);
  return (
    <>
        <button onClick={() => setIsMetric(!false)} className='px-2 py-2.5 text-[16px]'>
            Switch to {isMetric ? "Imperial" : "Metric"}
        </button>

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