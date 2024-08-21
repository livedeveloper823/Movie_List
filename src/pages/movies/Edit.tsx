import { Download } from "lucide-react";
import image from '../../assets/image.png';
import SubmitForm from "../../components/SubmitForm";
import { useDispatch } from "../../store";
import { useState, ChangeEvent } from "react";
import { addVideosData } from "../../store/reducers/videos";
import { VideoProps } from "../../types";

const EditMovie: React.FC = () => {
    const dispatch = useDispatch()
        ;
    const [videoData, setVideoData] = useState<VideoProps>({
        title: "",
        image: "",
        publishingDate: "",
    });

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const videoTitle = e.target.value;
        setVideoData((prevData) => ({
            ...prevData, // Spread the previous state
            title: videoTitle, // Update the title
        }));
    };
    dispatch(addVideosData(videoData))

    return (
        <>
            <div className="text-white font-montserrat xl:px-80 lg:px-40 md:px-20 px-10 xl:pt-40 pt-20">
                <p className="md:text-5xl text-3xl font-semibold">Edit</p>
                <div className="grid mt-20 gap-20 md:grid-cols-1 lg:grid-cols-2">
                    <div className="order-2 md:row-span-2 lg:order-1">
                        <label htmlFor="photo-upload" className="fas">
                            <div className="lg:h-full h-[200px] border-2 border-white border-dashed rounded-md flex justify-center items-center hover:cursor-pointer">
                                <div className="flex flex-col items-center gap-3">
                                    <Download />
                                    <p className="text-sm">Drop an image here</p>
                                </div>
                            </div>
                            <input id="photo-upload" type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="order-1">
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Title" className="lg:w-96" onChange={handleTitleChange} />
                            <input type="text" placeholder="Publishing year" className="lg:w-56" />
                        </div>
                    </div>
                    <div className="order-3">
                        <div className="flex lg:justify-start justify-center">
                            <SubmitForm />
                        </div>
                    </div>
                </div>
            </div>

            <img src={image} alt="" className='w-full absolute bottom-0' />
        </>
    )
}

export default EditMovie;