import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/checkoutCart/checkout.selector";
import { removeProduct } from "../../redux/checkoutCart/checkout.action";

const Checkout=()=>{
    const dispatch=useDispatch();
    const products=useSelector(getProducts);
    
    const deleteProduct=()=>{
        dispatch(removeProduct(products._id))
    }
    console.log(products);

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
                    <div className="w-full h-full grid grid-cols-5 gap-3 text-center">
                        <div>Product</div>
                        <div>DESCRIPTION</div>
                        <div>QUANTITY</div>
                        <div>PRICE</div>
                        <div>REMOVE</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;