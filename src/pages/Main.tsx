import { useNavigate } from 'react-router';
import image from '../assets/image.png'
import VideoCard from '../components/VideoCard';
import { CirclePlus, LogOut } from "lucide-react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from '../store';
import { getAllVideosData } from '../store/reducers/videos';

const Main = () => {
	const [page, setPage] = useState(0)
	const videos = useSelector((state) => state.videos)
	const dispatch = useDispatch();

	const navigate = useNavigate();
	useEffect(() => { dispatch(getAllVideosData()) }, [])
	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn")
		navigate('/');
	}
	// pagination
	const Prev = () => {
		setPage(Math.max(page - 1, 0));
	}

	const Next = () => {
		setPage(Math.min(page + 1, Math.floor(videos.videos.length / 8)))
	}

	const pages = Array.from({ length: Math.floor(videos.videos.length / 8) + 1 }, (_, index) => index);

	return (
		<div className='text-white font-montserrat'>
			{videos.videos.length == 0 ?
				<div className="text-white font-montserrat h-screen">
					<div className='flex justify-center items-center h-[90vh]'>
						<div className='flex flex-col gap-10  w-[380px]'>
							<p className='sm:text-5xl text-4xl font-semibold text-center'>Your movie list is empty</p>
							<div className="w-full bg-primary py-3 cursor-pointer text-center font-bold rounded-md" onClick={() => navigate("/movies/add")}>Add a new movie</div>
						</div>
					</div>
					<img src={image} alt="" className='w-full absolute bottom-0' />
				</div>
				:
				<div className='2xl:px-40 lg:px-20 px-10 py-40'>
					<div className='flex justify-between'>
						<div className="flex sm:gap-5 gap-2 items-center">
							<p className="sm:text-5xl text-3xl font-semibold">My movies</p>
							<CirclePlus width={32} className='hover:cursor-pointer' onClick={() => navigate("/movies/add")} />
						</div>
						<div className='flex items-center gap-2 hover:cursor-pointer' onClick={handleLogout}>
							<p className='font-bold md:visible invisible'>Logout</p>
							<LogOut />
						</div>
					</div>
					<div className='flex justify-center items-center lg:mt-40 ms:mt-20 mt-10'>
						<div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-10 gap-4'>
							{
								videos && videos.videos
									.filter((item, index) =>
										index >= page * 8 && index < (page + 1) * 8
									)
									.map((item, index) => (
										<VideoCard
											key={index}
											title={item.title}
											image={item.image}
											publishingYear={item.publishingYear}
											onClick={() => navigate(`/movies/edit?id=${item._id}`)}
										/>
									))
							}
						</div>
					</div>
					<div className='md:visible invisible flex justify-center items-center gap-4 text-center mt-20'>
						<div className='hover:cursor-pointer' onClick={Prev}>Prev</div>
						{pages.map((item, index) =>
							page == item ?
								<div key={index} className='bg-primary w-10 py-2 rounded-md'>{item + 1}</div>
								: <div key={index} className='bg-card w-10 py-2 rounded-md'>{item + 1}</div>
						)}
						<div className='hover:cursor-pointer' onClick={Next}>Next</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Main;