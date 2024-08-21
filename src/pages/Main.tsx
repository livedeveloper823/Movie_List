import { useNavigate } from 'react-router';
import image from '../assets/image.png'

const Main = () => {
    const navigate = useNavigate();

    return (
        <div className="text-white font-montserrat h-screen">
            <div className='flex justify-center items-center h-[90vh]'>
                <div className='flex flex-col gap-10  w-[380px]'>
                    <p className='sm:text-5xl text-4xl font-semibold text-center'>Your movie list is empty</p>
                    <div className="w-full bg-primary py-3 cursor-pointer text-center font-bold rounded-md" onClick={() => navigate("/movies/add") }>Add a new movie</div>
                </div>
            </div>
            <img src={image} alt="" className='w-full absolute bottom-0' />
        </div>
    )
}

export default Main;