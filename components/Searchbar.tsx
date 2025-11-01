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
    <form onSubmit={handleSubmit} className='flex items-center gap-3'>
        <label htmlFor="city" className="bg-neutral-800  rounded-xl px-5 py-4 w-120 flex items-center gap-3">
            <Image className="pt.5"  src={searchIcon} width={20} height={20} alt=""/>

            <input className="focus-visible:outline-none focus:otuline-none placeholder:text-neutral-200" type="text" name="city" id="city" placeholder='Search for a place...' onChange={handleChange} value={cityName}/>
        </label>

        <button className="bg-blue-500  rounded-xl px-5 py-4 cursor-pointer">
            Search
        </button>
    </form>
  )
}

export default Searchbar