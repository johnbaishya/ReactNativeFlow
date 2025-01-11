import ErrorModal from "./ErrorModal"
import SuccessModal from "./LoadingModal"
import LoadingModal from "./SuccessModal"

const AppModals = ()=>{
    return(
        <>
            <LoadingModal/>
            <SuccessModal/>
            <ErrorModal/>
        </>
    )
}

export default AppModals;