import {chef, quote, sign} from "../assets"

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
                    <img src={quote} alt="quote-bg" className="w-1/5 mt-12 md:w-48 lg:w-60"/>
                    <p className="font-primary text-white font-normal tracking-wider capitalize">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                    </p>
                </div>
                <p className="font-primary text-white font-normal tracking-wider capitalize">
                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                </p>
            </div>

            <div className="w-full mt-12">
                <p className="font-base font-normal text-3xl leading-10 tracking-wider capitalize text-golden-primary">Kevin Luo</p>
                <p className="font-primary text-white font-normal tracking-wider capitalize">Proud Chef</p>
                <img src={sign} alt="signature" className="w-4/5 md:w-60 lg:w-80 mt-12"/>
            </div>
        </div>
    </section>
)

export default Chef