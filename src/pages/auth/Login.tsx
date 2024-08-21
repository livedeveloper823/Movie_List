import image from '../../assets/image.png'
import { useNavigate } from 'react-router'
import useAuth from '../../hooks/useAuth'

const Login = () => {

    const Login = useAuth()
    const navigate = useNavigate()

    const handleSubmit = () => {
        Login
        navigate("/main")
    }

    return (
        <div className='h-screen'>
            <form className="flex items-center justify-center h-[90vh] text-white font-montserrat" onSubmit={handleSubmit}>
                <div className=" flex flex-col justify-around w-80 h-96">
                    <div className="text-center text-5xl font-bold">
                        Sign in
                    </div>
                    <div className="flex flex-col gap-5">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <label htmlFor="remember" className="flex gap-1 justify-center" >
                            <input name="remember" type="checkbox" />
                            Remember me
                        </label>
                        <button className="bg-primary py-3 text-center rounded-md" type='submit' >
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <img src={image} alt="" className='w-full absolute bottom-0' />
        </div>
    )
}

export default Login;