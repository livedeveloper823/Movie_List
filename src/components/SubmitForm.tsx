import Button from "./Button"

const SubmitForm = () => {
    return (
        <div className="flex gap-5 text-center">
            <Button text="Cancel" className="sm:px-14 px-10 py-3 font-bold border-2 border-white rounded-[10px]" />
            <Button text="Submit" className="sm:px-14 px-10 py-3 font-bold bg-primary border-2 border-primary rounded-[10px]" />
        </div>
    )
}

export default SubmitForm