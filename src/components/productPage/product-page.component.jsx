import { useContext } from "react";
import { useParams } from "react-router-dom";
import {UilArrowRight } from '@iconscout/react-unicons'
import { DataContext } from "../../context/products.context";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setProduct } from "../../redux/checkoutCart/checkout.action";






const ProductPage=()=>{
    const {productId}=useParams();
    const productsData = useContext(DataContext);
    const dispatch=useDispatch();
    
    const products = productsData.find(product => product.key === parseInt(productId));

    
    const handleCheckout=()=>{
        console.log("add Checkout Item : ",productId);
        console.log(products);
        dispatch(setProduct(products));
        console.log(dispatch(setProduct(products)));
    };
    if (!products) {
        return (
            <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
                <div className="flex space-x-2 animate-pulse">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                </div>
            </div>
            );
      }

    return(
        <>  
            <div className="flex justify-center items-center w-full h-full p-16">
                <div className="w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <img width="500px" height="500px" className="max-content" src={products.imageUrl} alt={products.name}/>
                        </div>
                        <div className="h-full ml-10">
                            <div>
                                <span className="text-5xl font-bold ">{products.name}</span>
                            </div>
                            <div className="mt-4">
                                <span className="font-medium text-lg">{products.productInformation}</span>
                            </div>
                            <div className="mt-4 flex">
                                <div className="line-through">{products.price} ₺ </div>
                                <div><UilArrowRight/></div>
                                <div>{(products.price*products.discountRate)/100} ₺ </div>
                            </div>
                            <div>
                                <Button onClick={handleCheckout} color="brown" className="mt-4">Add Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;