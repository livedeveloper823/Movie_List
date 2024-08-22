import image from '../../assets/image.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { UserProfileProps } from '../../types'
import { dispatch } from '../../store'
import { getUserInfo } from '../../store/reducers/auth'

const Login = () => {
    const [userData, setUserData] = useState<UserProfileProps>({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevData) => ({
            ...prevData,
            email: e.target.value,
        }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData((prevData) => ({
            ...prevData,
            password: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        dispatch(() => getUserInfo(userData))
        localStorage.setItem("isLoggedIn", "true");
        navigate("/main");
    }

    return (
        <div className='h-screen'>
            <form className="flex items-center justify-center h-[90vh] text-white font-montserrat" onSubmit={handleSubmit}>
                <div className=" flex flex-col justify-around w-80 h-96">
                    <div className="text-center text-5xl font-bold">
                        Sign in
                    </div>
                    <div className="flex flex-col gap-5">
                        <input type="email" placeholder="Email" onChange={handleEmailChange} />
                        <input type="password" placeholder="Password" onChange={handlePasswordChange} />
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