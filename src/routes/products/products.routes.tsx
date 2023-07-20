import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"

const Products:FC=()=>{
    return(
        <>
            <Navigate to="/products/sofa"/>
            <Outlet/>
        </>
    )
}

export default Products