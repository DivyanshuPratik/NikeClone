import { headerLogo, } from "../assets/images"
import { hamburger } from "../assets/icons"
import { useEffect, useState } from "react"

const Nav = () => {
  const [menuOpen,setMenu] = useState(false);

  const handleClick = () => {
    setMenu(menuOpen=>!menuOpen);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex flex-row justify-between items-center">
            <a href="/">
                <img src={ headerLogo } alt="LOGO" width={130} height={29}/>
            </a>
            <ul className="hidden lg:flex flex-row ">
                <li><a className="px-10" href="">Home</a></li>
                <li><a className="px-10" xhref="">About Us</a></li>
                <li><a className="px-10" href="">Products</a></li>
                <li><a className="px-10" href="">Contact Us</a></li>
            </ul>
            <a className="hidden lg:block font-bold bg-orange-500 text-white px-4 py-2 rounded-2xl"href="/login">Login/Signup</a>
            
            <img src = {hamburger} alt="" height={30} width={30} className="block lg:hidden" onClick={handleClick}/>
        </nav>
        {(menuOpen?<div>Hey</div>:null)}
    </header>
  )
}

export default Nav
