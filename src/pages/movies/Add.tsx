import { Download } from "lucide-react";
import image from '../../assets/image.png';
import SubmitForm from "../../components/SubmitForm";

const AddMovie = () => {
    return (
        <>
            <div className="text-white font-montserrat px-40 pt-20">
                <p className="text-5xl font-semibold">Create a new Movie</p>
                <div className="flex gap-40 mt-20">
                    <button>
                        <div className="w-[450px] h-[500px] border-2 border-white border-dashed rounded-md flex justify-center items-center">
                            <div className="flex flex-col items-center gap-3">
                                <Download />
                                <p className="text-sm">Drop an image here</p>
                            </div>
                        </div>
                    </button>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Title" className="w-96" />
                            <input type="text" placeholder="Publishing year" className="w-56" />
                        </div>
                        <SubmitForm />
                    </div>
                </div>
            </div>
            <img src={image} alt="" className='w-full absolute bottom-0' />
        </>
    )
}

export default AddMovie;