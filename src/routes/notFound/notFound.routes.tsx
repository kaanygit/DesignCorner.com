import { FC } from "react";
import { Outlet } from "react-router-dom";


const NotFound:FC=()=>{
    return(
        <>
            <h1>NotFound</h1>
            <Outlet/>
        </>
    )
}

export default NotFound;