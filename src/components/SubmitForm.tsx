import Button from "./Button"

const SubmitForm = () => {
    return (
        <div className="flex gap-5 text-center">
            <Button text="Cancel" className="px-14 py-3 border-2 border-white rounded-[10px]" />
            <Button text="Submit" className="px-14 py-3 bg-primary border-2 border-primary rounded-[10px]" />
        </div>
    )
}

export default SubmitForm