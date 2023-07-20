import { FC } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useDispatch,useSelector } from "react-redux";
import RootState from '../../redux/root-reducer';
import {setProduct} from "../../redux/checkoutCart/checkout.action"
import SpinnerComponent from '../spinner/spinner.component'
import { BsArrowRight } from "react-icons/bs";




const ProductPage:FC=()=>{
    const {productId}=useParams<{ productId: string }>();
    const {products} = useSelector((state: RootState) => state.productsData);
    const dispatch=useDispatch();
    
    const product = products.find(product => product.key.toString() === productId);

    
    const handleCheckout=()=>{
        console.log("add Checkout Item : ",productId);
        console.log(products);
        if (product) {
            dispatch(setProduct(product));
          }
    };
    if (!product) {
        return (
            <> 
                <div className="w-screen h-screen">
                    <SpinnerComponent/>
                </div>
            </>
        )
      }

    return(
        <>  
            <div className="flex justify-center items-center w-full h-full p-16">
                <div className="w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <img width="500px" height="500px" className="max-content" src={product.imageUrl} alt={product.name}/>
                        </div>
                        <div className="h-full ml-10">
                            <div>
                                <span className="text-5xl font-bold ">{product.name}</span>
                            </div>
                            <div className="mt-4">
                                <span className="font-medium text-lg">{product.productInformation}</span>
                            </div>
                            <div className="mt-4 flex">
                                <div className="line-through">{product.price} ₺ </div>
                                <div className="text-center h-full justify-center pl-2 pr-2"><BsArrowRight/></div>
                                <div>{(product.price*product.discountRate)/100} ₺ </div>
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