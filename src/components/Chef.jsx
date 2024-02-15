import {chef, quote} from "../assets"

const Chef = () => (
    <section className="flex flex-col md:flex-row justify-between items-center bg-[url('./assets/bg.png')]
    bg-center bg-cover bg-repeat bg-fixed min-h-screen py-16 px-8 md:px-24">
        <div className="flex flex-1 justify-center items-center w-full mx-8 mb-20 lg:mb-0">
            <img src={chef} alt="chef-bg" className="w-full lg:w-9/12"/>
        </div>
        <div className="flex flex-1 flex-col justify-center items-start w-full">
            <p className="font-base text-white font-bold tracking-wider leading-7 text-2xl mb-1 capitalize"
               style={{ fontFeatureSettings: "'tnum' on, 'lnum' on" }}>culinary mastery unveiled</p>
            <h1 className="font-base text-golden-primary capitalize text-5xl leading-loose tracking-wider">
                Embrace the secret of cooking
            </h1>
            <div className="w-full flex flex-col mt-20">
                <div className="flex justify-start items-end">
                    <img src={quote} alt="quote-bg" className="w-4/5 mt-12 md:w-60 lg:w-80"/>
                </div>
            </div>
        </div>
    </section>
)

export default Chef