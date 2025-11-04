"use client"

import { useState } from "react";

const UnitsMenu = () => {
    const [isMetric, setIsMetric] = useState<boolean>(true);
  return (
    <>
        <button onClick={() => setIsMetric(!false)} className=''>
            Switch to {isMetric ? "Imperial" : "Metric"}
        </button>

        <div className="flex flex-col">
            <p>Temperature</p>

            <button className="">
                Celsius {`(°C)`}
            </button>

            <button className="">
                Fahrenheit {`(°F)`}
            </button>

            <hr />
        </div>
    </>
  )
}

export default UnitsMenu