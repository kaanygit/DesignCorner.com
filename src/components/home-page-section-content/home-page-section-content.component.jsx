import { Transition } from "@headlessui/react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import {UilShoppingCartAlt} from '@iconscout/react-unicons'
import { DataContext } from "../../context/products.context";
import { setProduct } from "../../redux/checkoutCart/checkout.action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const HomePageSectionContent=()=>{
    const [showSectionContent,setShowSectionContent]=useState(false);
    const products=useContext(DataContext);
    const dispatch=useDispatch();
    useEffect(()=>{
        const handleScroll=()=>{
            const scrollPosition =window.scrollY;
            const windowHeight=window.innerHeight;
    
            if(scrollPosition >windowHeight*0.6){
                setShowSectionContent(true);
                window.removeEventListener('scroll',handleScroll);
            }
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    // const selectProducId=(productId)=>{
    //     const product = products.find((product) => product._id === productId);
    //     if (product) {
    //         dispatch(setProduct(product));
    //       }
    // }
    const selectProducId=(productId)=>{
        const productSet=()=>{
            products.map((id)=>{
                if(id._id===productId){
                    dispatch(setProduct(id));
                }
            })
        }
        productSet();
        console.log(products);
    } 
    return(
        <>
            <div className="w-full h-full p-16 flex">
                <Transition show={showSectionContent} enter="transition-opacity duration-500" enterFrom="opacity-0 transform translate-x-full" enterTo="opacity-100 transform translate-x-0">
                    <div>
                        <div>
                            <span className="text-3xl font-bold">SHOP BY CATEGORY</span>
                        </div>
                        <div className="w-full border-b-8 border-black mt-3"></div>
                        <div>
                            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-6 mt-5 w-full">
                                {products.map((product)=>(
                                    <div className="relative" key={product.key}>
                                        <div className="w-full h-full">
                                            <div className="groupImage transition-transfrom transform-gpu  overflow-hidden">
                                                <Link to={`/products/${product.name}/${product.key}`}>
                                                    <img className="w-64 h-48  hover:scale-110 hover:duration-500 " src={product.imageUrl} alt={product.name}/>
                                                </Link>
                                            </div>
                                            <div className="items-center flex justify-between w-full bg-gray-100 p-2">
                                                <Link to={`/products/${product.name}/${product.key}`}>
                                                    <span>{product.name}</span>
                                                </Link>
                                                <button className="block pr-3" onClick={()=>selectProducId(product._id)}><UilShoppingCartAlt /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </>
    )

}
export default HomePageSectionContent;