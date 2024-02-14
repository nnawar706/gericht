import {useNavigate} from 'react-router-dom'

const Button = ({ heading, redirectUrl }) => {
    const navigate = useNavigate()

    return <button className="bg-crimson-primary text-black-primary font-base font-bold tracking-wider
        leading-7 text-base py-2 px-6 border-none rounded-sm outline-none cursor-pointer"
                   onClick={() => navigate(redirectUrl)}
    >{heading}</button>
}

export default Button