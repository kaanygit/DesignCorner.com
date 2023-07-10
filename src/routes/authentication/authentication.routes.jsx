import { Outlet } from "react-router-dom"
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './authentication.styles.css'

const Authentication=()=>{
    return(
        <>
            <div id="authentication">
                <div className="authentication flex text-center justify-evenly  w-full items-center font-montserrat-alternates h-screen">
                    <div className="flex-direction grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                        <SignIn/>
                        <SignUp/>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Authentication