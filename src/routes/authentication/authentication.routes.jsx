import { Outlet } from "react-router-dom"
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'


const Authentication=()=>{
    return(
        <>
            <div className="authentication flex text-center justify-evenly p-20 w-full items-center font-montserrat-alternates">
                <SignIn/>
                <SignUp/>
            </div>
            <Outlet/>
        </>
    )
}

export default Authentication