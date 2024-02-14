import {g, knife, spoon} from "../assets/index.js";
import Button from "./ui/Button.jsx";

const ImportantLinks = () => (
    <section className="relative bg-[url('./assets/bg.png')] bg-center bg-cover bg-repeat
    bg-fixed flex justify-center items-center py-16 px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 flex justify-center items-center">
            <img src={g} alt="overlay-bg" className="w-3/5 h-[320px] md:w-[391px] md:h-[415px] z-0"/>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center w-full z-10">
            <div className="flex flex-1 flex-col justify-end items-end text-right">
                <h1 className="font-base text-golden-primary tracking-wider leading-relaxed
                md:leading-loose text-3xl md:text-4xl capitalize">unlock personalized meal plans</h1>
                <img src={spoon} alt="spoon-bg" className="w-11 lg:w-[80px]"/>
                <p className="my-4 font-primary text-white capitalize text-sm leading-7 tracking-wider font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                </p>
                <Button heading="Get Started" redirectUrl="/"/>
            </div>

            <div className=""></div>
        </div>
    </section>
)

export default ImportantLinks