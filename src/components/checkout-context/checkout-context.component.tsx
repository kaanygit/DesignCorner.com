import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../redux/checkoutCart/checkout.selector";
import {AiOutlineClose,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { decreaseProduct, increaseProduct, removeProduct } from "../../redux/checkoutCart/checkout.action";
import { FC, useEffect } from "react";
import { useState } from "react";
import SpinnerComponent from "../spinner/spinner.component";
const CheckoutContext:FC=()=>{
    const products=useSelector(getProducts);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch();
    console.log(products);
    console.log(isLoading)
    useEffect(()=>{
        if(products){
            setIsLoading(true);
        }else{
            setIsLoading(false);
        }
    },[products])

    const handleCountIncrement=(productId:string)=>{
        dispatch(increaseProduct(productId))
    }
    const handleCountDecrement=(productId:string)=>{
        dispatch(decreaseProduct(productId))
    }
    const handleRemoveProduct=(productId:string)=>{
        dispatch(removeProduct(productId));
    }

    return(
            isLoading ? (
                    products.map((product)=>(
                        <div className="w-full grid grid-cols-5 gap-3 text-center justify-center items-center " key={product._id}>
                            <img src={product.imageUrl} alt={product.name}/>
                            <div className="w-full h-full flex">
                                <span  className="text-center items-center justify-center flex w-full text-xl">{product.productInformation}</span>
                            </div>
                            <div className="w-full h-full flex text-center items-center justify-evenly text-xl ">
                                <div><button onClick={()=>handleCountDecrement(product._id)}><AiOutlineMinus/></button></div>
                                <div>{product.count}</div>
                                <div><button onClick={() => handleCountIncrement(product._id)}><AiOutlinePlus/></button></div>
                            </div>
                            <div className="w-full h-full flex">
                                <span  className="text-center items-center justify-center flex w-full text-3xl">{product.discountRate>0?(product.price*product.discountRate)/100:product.price} ₺</span>
                            </div>
                            <div className="w-full h-full flex">
                                <span className="text-center items-center justify-center flex w-full"><button onClick={()=>handleRemoveProduct(product._id)}><AiOutlineClose className="text-3xl"/></button></span>
                            </div>
                        </div>
                    ))
            ):(
                <>
                    <SpinnerComponent/>
                </>
            )

    )
}

export default CheckoutContext