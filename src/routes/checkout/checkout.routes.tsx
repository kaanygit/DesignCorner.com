import { useSelector } from "react-redux";
import { getProducts } from "../../redux/checkoutCart/checkout.selector";
import CheckoutContext from '../../components/checkout-context/checkout-context.component'
import { useEffect } from "react";
const Checkout=()=>{
    const products=useSelector(getProducts);
    const totalCount=products.reduce((sum,product)=>
        product.discountRate>0?sum+(((product.price*product.discountRate)/100)*product.count):sum+(product.price*product.count),
        0
    )
    
    useEffect(()=>{
        console.log(products);
        
    },[products])
    console.log(totalCount);

    return(
        <>
            <div className="flex w-full h-screen p-16 font-montserrat-alternates">
                <div className="w-full h-full">
                    <div className="justify-center items-center flex text-2xl font-bold  border-b-2 border-black grid-cols-5 gap-3 grid text-center">
                        <div>Product</div>
                        <div>DESCRIPTION</div>
                        <div>QUANTITY</div>
                        <div>PRICE</div>
                        <div>REMOVE</div>
                    </div>
                    <CheckoutContext/>
                    <div className="w-full">
                        <hr/>
                        <div className="justify-end flex pr-16 pt-10 text-3xl font-bold">
                            <span>Total :{totalCount} ₺</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;