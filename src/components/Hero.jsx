import Button from "./ui/Button"
import {welcome} from "../assets"

const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row justify-between items-center
        min-h-[100vh] bg-black-primary py-16 px-24">
            <div className="flex flex-1 flex-col w-full justify-center items-start">
                <h1 className="font-base text-golden-primary font-bold tracking-wider uppercase text-6xl">
                    the key to fine dining
                </h1>
                <p className="mx-4 my-8 no-underline transition duration-500 ease-in-out font-primary text-white
                   tracking-wider uppercase font-normal leading-7 text-base hover:border-b
                   border-transparent hover:border-golden-primary"></p>
                <Button heading="Explore Recipe" redirectUrl="/explore-recipes"/>
            </div>

            <div className="flex flex-1 w-full justify-center items-center ml-0 md:ml-8 mt-20 md:mt-0">
                <img src={welcome} alt="hero-bg" className="w-full md:w-10/12 md:hover:w-11/12 transition-width duration-500 overflow-auto"/>
            </div>
        </section>
    )
}

export default Hero