import {Hero, ImportantLinks, Navbar} from "../components"
import Chef from "../components/Chef.jsx";

const Landing = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <ImportantLinks/>
            <Chef/>
        </>
    )
}

export default Landing