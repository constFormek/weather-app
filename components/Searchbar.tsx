"use client"

import { useState } from "react"

import Image from "next/image";
import searchIcon from "@/public/assets/images/icon-search.svg"

const Searchbar = () => {
    const [cityName, setCityName] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCityName("");
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 lg:items-center lg:flex-row'>
        <label htmlFor="city" className="bg-neutral-800  hover:bg-neutral-700 transition  flex items-center rounded-xl px-5 py-4 w-90 lg:w-120 gap-3 cursor-pointer">
            <Image  src={searchIcon} width={18} height={20} alt=""/>

            <input className="focus-visible:outline-none focus:otuline-none placeholder:text-neutral-200" type="text" name="city" id="city" placeholder='Search for a place...' onChange={handleChange} value={cityName}/>
        </label>

        <button className="bg-blue-500 hover:bg-blue-700 transition  rounded-xl px-5 py-4 cursor-pointer">
            Search
        </button>
    </form>
  )
}

export default Searchbar