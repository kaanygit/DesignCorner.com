import { Navigate, Outlet } from "react-router-dom"

const Products=()=>{
    return(
        <>
            <Navigate to="/products/sofa"/>
            <Outlet/>
        </>
    )
}

export default Products