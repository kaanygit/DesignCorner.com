import { Button, Spinner } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import {GrShop} from 'react-icons/gr'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getProducts} from "../../redux/checkoutCart/checkout.selector"
import SpinnerComponent from '../spinner/spinner.component'
import { decreaseProduct, increaseProduct } from '../../redux/checkoutCart/checkout.action';


const CartItem=()=>{
    const [checkoutMenuOpen,setCheckoutMenuOpen]=useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch=useDispatch();
    const products=useSelector(getProducts);
    console.log(products);
    useEffect(()=>{
        if(products){
            setIsLoading(true);
        }else{
            setIsLoading(false);
        }
    },[products])

    const checkoutOpen=()=>{
        setCheckoutMenuOpen(!checkoutMenuOpen);
    };
    const IncreaseProduct=(productId)=>{
        dispatch(increaseProduct(productId));
    }
    const DecreaseProduct=(productId)=>{
        dispatch(decreaseProduct(productId));
    }
    return(
        <>
            <div className="relative">
                <button onClick={checkoutOpen}>
                    <GrShop/>
                </button>
                {checkoutMenuOpen && (
                    <div className="absolute top-0 right-0 mt-12 w-96  bg-gray-100 border border-woodColor rounded-xl shadow">
                        <div className="flex justify-evenly pt-3 pb-3 w-full h-full">
                            {isLoading?(
                                <>
                                    <div className=''>
                                        {products.map((product)=>(
                                            <div key={product._id} className='grid grid-cols-1 gap-2 '>
                                                <div className='flex'>
                                                    <div className='flex items-center justify-center '>
                                                        <img className="w-48 h-42" src={product.imageUrl} alt={product.name} />
                                                    </div>
                                                    <div className="h-full justify-center items-center text-center p-10 ">
                                                        <div className="text-xl font-bold flex ">
                                                            {product.name}
                                                        </div>
                                                        <div className="justify-evenly text-medium mt-3">
                                                            <div className="flex w-full h-full">
                                                                <div className="flex justify-between w-full h-full">
                                                                    <button onClick={()=>DecreaseProduct(product._id)}><AiOutlineMinus/></button>
                                                                    <span>{product.count}</span>
                                                                    <button onClick={()=>IncreaseProduct(product._id)}><AiOutlinePlus/></button>
                                                                </div>
                                                            </div>
                                                            <div className="mt-5"> {product.price} tl</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ):(
                                <>
                                    <SpinnerComponent/>
                                </>
                            )}
                        </div>
                        <Link to="/checkout">
                            <button className="w-full rounded-none bg-brown-500 text-white font-medium text-2xl rounded-b-xl" >Go to Checkout</button>
                        </Link>

                    </div>
                )}
            </div>

        </>
    )
}

export default CartItem