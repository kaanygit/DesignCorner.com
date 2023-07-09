import { Outlet } from "react-router-dom";


const NotFound=()=>{
    return(
        <>
            <h1>NotFound</h1>
            <Outlet/>
        </>
    )
}

export default NotFound;