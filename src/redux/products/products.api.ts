import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "./products.action";
import {useEffect } from "react";
import { ProductData } from "./produts.types";

const apiUrl="http://localhost:8080/products";

export const ProductList=()=>{
    const dispatch=useDispatch();

    useEffect(() => {
        fetchProduct();
      }, []);
    const fetchProduct = async () => {
        try {
            const response = await axios.get<ProductData[]>(apiUrl);
            const dataProduct = response.data;
            dispatch(setProducts(dataProduct));
            console.log()
        } catch (error) {
            throw new Error('Veri Getirme Hatası !');
        }
    };
};