import {spoon} from "../assets/index.js";

const Footer = () => (
    <section className="w-full relative flex flex-col justify-start items-center z-10
    bg-black-primary sm:pb-8 py-16 px-24" id="login">
        <div className="w-full h-full flex flex-col absolute -z-10">
            <div className="bg-black-primary h-1/4" />
            <div className="h-3/4 bg-[url('./assets/bg.png')] bg-fixed bg-center bg-cover bg-repeat" />
        </div>
        <div className="py-8 px-0 md:px-16 border-none md:border-2 md:border-solid border-golden-primary">
            <div className="text-center">
                <div className="mb-4">
                    <h1 className="font-base text-golden-primary tracking-wider leading-relaxed
                md:leading-loose text-3xl md:text-4xl capitalize">subscribe</h1>
                    <img src={spoon} alt="spoon-bg" className="w-11 lg:w-[80px]"/>
                </div>
                <h1 className="text-3xl font-base text-golden-primary capitalize tracking-wider">
                    Subscribe to our newsletter
                </h1>
                <p className="font-primary text-white font-medium tracking-wider capitalize text-base">
                    and never miss latest updates!
                </p>
            </div>
        </div>
    </section>
)

export default Footer