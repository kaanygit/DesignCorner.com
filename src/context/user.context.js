import { useState,useEffect,createContext } from "react";
import { ToastContainer, toast } from "react-toastify";

export const TokenInitialState=createContext(null);

const TokenInitialStateProvider=({children})=>{
    const [token,setToken]=useState(null);
    useEffect(()=>{
        try {
            const jsonAuthToken=localStorage.getItem('token');
            // const des=JSON.stringify(jsonAuthToken)
            setToken(jsonAuthToken);
        } catch (error) {
            toast.error("Error Context : ",error);
        }
    },[])
    console.log(token);

    return(
        <>
            <TokenInitialState.Provider value={token}>{children}</TokenInitialState.Provider>
            <ToastContainer/>
        </>
    )
}

export default TokenInitialStateProvider;