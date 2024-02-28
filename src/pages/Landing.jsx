import {Hero, ImportantLinks, Navbar} from "../components"
import Chef from "../components/Chef.jsx";
import Footer from "../components/Footer.jsx";

const Landing = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <ImportantLinks/>
            <Chef/>
            <Footer/>
        </>
    )
}

export default Landing