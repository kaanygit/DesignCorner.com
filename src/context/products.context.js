import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext=createContext();

const DataProvider=({children})=>{
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('http://localhost:8080/products');
                setProducts(response.data);
            }catch(err){
                console.error('Data Fetch Error : ',err);
            }
        }
        fetchData();

    },[])

    return(
        <DataContext.Provider value={products}>{children}</DataContext.Provider>
    )
}
export default DataProvider