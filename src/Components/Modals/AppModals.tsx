import ErrorModal from "./ErrorModal"
import SuccessModal from "./SuccessModal"
import LoadingModal from "./LoadingModal"
import React from "react"

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