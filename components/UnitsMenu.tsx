"use client"

import { useEffect, useState } from "react";
import UnitsMenuElement from "./UnitsMenuElement";

const unitsList = [
    {   
        id: 0,
        category: "Temperature",
        items: ["Celsius (°C)", "Fahrenheit (°F)"]
    },

    {
        id: 1,
        category: "Wind Speed",
        items: ["km/h", "mph"]
    },

    {
        id: 2,
        category: "Percipitation",
        items: ["Millimiters (mm)", "Inches (in)"]
    },
]
const UnitsMenu = () => {
    const [unitsType, setUnitsType] = useState<'metric' | 'imperial'>('metric');
    const [activeIndexesArr, setActiveIndexesArr] = useState<number[]>([0,0,0]);

    const handleItemClick = (categoryIndex: number, newItemIndex: number) => {
        setActiveIndexesArr(
            activeIndexesArr.map((i, index) => {
                if (index === categoryIndex) {
                return newItemIndex
                } else {
                    // Jeśli nie, to nie ruszamy tego elementu. Zwróć go tak, jak był.
                    return i;
                }
            })
        )
    };
  return (
    <>
        {unitsType === "imperial" ? (
            <button onClick={() => {setUnitsType('metric'); setActiveIndexesArr([0,0,0])}} className=' cursor-pointer px-2.5 py-2.5 text-[16px] hover:bg-neutral-700 transition rounded-lg w-full text-start'>
            Switch to Metric
            </button>
        ) : (
            <button onClick={() => {setUnitsType('imperial'); setActiveIndexesArr([1,1,1])}} className=' cursor-pointer px-2.5 py-2.5 text-[16px] hover:bg-neutral-700 transition rounded-lg w-full text-start'>
            Switch to Imperial
            </button>
        )}

        
        {unitsList.map((item, index) => (
            <UnitsMenuElement 
                key={item.id}
                categoryIndex={index}
                items={item.items}
                category={item.category}
                activeIndex={activeIndexesArr[item.id]}
                onClick={handleItemClick}
            />
        ))}
        
    </>
  )
}

export default UnitsMenu