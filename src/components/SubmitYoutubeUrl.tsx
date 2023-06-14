import {Button} from "flowbite-react"

export const SubmitYoutubeUrl = ({handleSubmit, isLoading}: {
    handleSubmit: () => void,
    isLoading: boolean
}) => {
    return <Button
        color={"purple"} onClick={handleSubmit}
        isProcessing={isLoading} disabled={isLoading}>Submit
    </Button>
}