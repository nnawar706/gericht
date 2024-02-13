import {useState} from "react"

import {logo} from "../assets"
import {Menu} from "../constants/menu.js";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="w-full flex justify-between items-center bg-black-primary py-4 px-8">
            <div className="flex justify-start items-center">
                <img src={logo} alt="logo" width="150px"/>
            </div>
            <ul className="flex flex-1 justify-center items-center list-none">
                {Menu.map((item, index) => (
                    <li key={index}
                        className="font-base text-white font-normal tracking-wide uppercase leading-7
                        text-base cursor-pointer mx-4 hover:text-gray-200">
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar