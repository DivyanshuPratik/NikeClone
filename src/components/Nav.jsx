import { headerLogo, } from "../assets/images"
import { hamburger } from "../assets/icons"
import { useEffect, useState } from "react"

const Nav = () => {
  const [menuOpen,setMenu] = useState(false);

  const handleClick = () => {
    setMenu(menuOpen=>!menuOpen);
  }

  return (
    <header className="padding-x py-8 z-10 w-full max-container ">
        <nav className="flex flex-row justify-between items-center">
            <a href="/">
                <img src={ headerLogo } alt="LOGO" width={130} height={29}/>
            </a>
            <ul className="ml-6 flex-1 flex justify-center items-center gap-16 max-lg:hidden font-montserrat text-lg">
                <li><a className="px-6" href="">Home</a></li>
                <li><a className="px-6" href="">About Us</a></li>
                <li><a className="px-6" href="">Products</a></li>
                <li><a className="px-6" href="">Contact Us</a></li>
            </ul>
            {/* <a className="hidden lg:block font-bold text-white bg-[#101828] px-6 py-3 rounded-md"href="/login">Login/Signup</a> */}
            
            <img src = {hamburger} alt="" height={30} width={30} className="block lg:hidden" onClick={handleClick}/>
        </nav>
        {(menuOpen?
        <div className="block lg:hidden relative w-44 mt-4 float-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition-all">
          <ul className="flex flex-col">
            <li className="border-b-2 px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"><a href="#">Home</a></li>
            <li className="border-b-2 px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"><a href="#">About Us</a></li>
            <li className="border-b-2 px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"><a href="#">Products</a></li>
            <li className="border-b-2 px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"><a href="#">Contact Us</a></li>
            <li className="px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"><a href="#">Login/Signup</a></li>
          </ul>
        </div>:
        null)}
    </header>
  )
}

export default Nav
