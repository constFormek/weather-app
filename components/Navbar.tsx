
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center'>
        <Image src={logo} alt="logo" width={200} height={200} />

        <button className="flex items-center gap-2 bg-neutral-800 rounded-md px-3 py-2.5 cursor-pointer">
            <Image src={"/assets/images/icon-units.svg"} width={16} height={16} alt=""/>

            <p className="text-sm">Units</p>

            <Image src={"/assets/images/icon-dropdown.svg"} width={14} height={14} alt="dropdown"/>
        </button>
    </div>
  )
}

export default Navbar