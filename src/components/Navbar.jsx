import {memo, useState} from "react"

import {logo} from "../assets"
import {Menu} from "../constants/menu.js";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className="w-full flex justify-between items-center bg-black-primary py-4 px-8">
            <div className="flex justify-start items-center">
                <img src={logo} alt="logo" width="150px"/>
            </div>
            <ul className="hidden md:flex flex-1 justify-center items-center list-none">
                {Menu.map((item, index) => (
                    <li key={index}
                        className="font-base text-white font-normal tracking-wider uppercase leading-10
                        text-base cursor-pointer mx-4 hover:text-gray-200">
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
            <div className="flex justify-end items-center">
                <a href=""
                   className="mx-4 no-underline transition duration-500 ease-in-out font-primary text-white
                   tracking-wider uppercase font-normal leading-7 text-base hover:border-b
                   border-transparent hover:border-golden-primary">Browse</a>
            </div>

            {/* navbar on smaller devices */}
            <div className="md:hidden">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                    <div className="fixed top-0 left-0 w-full h-[100vh] bg-black-primary transition-all duration-500 ease-in-out flex-col z-10">
                        <MdOutlineRestaurantMenu fontSize={27}
                            className="absolute top-[20px] right-[20px] text-golden-primary cursor-pointer text-lg"
                            onClick={() => setToggleMenu(false)}
                        />
                        <ul className="list-none">
                            {Menu.map((item, index) => (
                                <li key={index}
                                    className="m-8 cursor-pointer text-golden-primary text-2xl text-center font-base hover:text-white">
                                    <a href={item.href} onClick={(e) => setToggleMenu(false)}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

// return memoized version of Navbar
export default memo(Navbar)