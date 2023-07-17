import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import {GrShop} from 'react-icons/gr'
import { Link } from 'react-router-dom';


const CartItem=()=>{
    const [checkoutMenuOpen,setCheckoutMenuOpen]=useState(false);
    // const dispatch=useDispatch();
    // const products=dispatch(getProducts);

    // console.log(products);
    const checkoutOpen=()=>{
        setCheckoutMenuOpen(!checkoutMenuOpen);
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
                            <div>
                                <img className="w-48 h-32" src="https://t3.ftcdn.net/jpg/03/91/10/84/360_F_391108454_Td5j8gNrkCHf9Hhyfdp6fK0b9SCj3NON.jpg" alt="resim" />
                            </div>
                            <div className="h-full">
                                <div className="text-xl font-bold ">
                                    Sofa
                                </div>
                                <div className="justify-evenly text-medium mt-3">
                                    <div className="flex">
                                        <div>Adet</div>
                                        <div className="flex">
                                            <button>+</button>
                                            <button>-</button>
                                        </div>
                                    </div>
                                    <div className="mt-3"> 249 tl</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-evenly pt-3 pb-3 w-full h-full">
                            <div>
                                <img className="w-48 h-32" src="https://t3.ftcdn.net/jpg/03/91/10/84/360_F_391108454_Td5j8gNrkCHf9Hhyfdp6fK0b9SCj3NON.jpg" alt="resim" />
                            </div>
                            <div className="h-full">
                                <div className="text-xl font-bold ">
                                    Sofa
                                </div>
                                <div className="justify-evenly text-medium mt-3">
                                    <div className="flex">
                                        <div>Adet</div>
                                        <div className="flex">
                                            <button>+</button>
                                            <button>-</button>
                                        </div>
                                    </div>
                                    <div className="mt-3"> 249 tl</div>
                                </div>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <Button className="w-full" color="brown">Go to Checkout</Button>
                        </Link>

                    </div>
                )}
            </div>

        </>
    )
}

export default CartItem