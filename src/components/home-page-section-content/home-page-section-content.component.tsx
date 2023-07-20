import React, { FC } from  "react";
import { Transition } from "@headlessui/react";
import {useEffect } from "react";
import { useState} from "react";
import {GrShop} from 'react-icons/gr'
import { setProduct } from "../../redux/checkoutCart/checkout.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RootState from "../../redux/root-reducer";

const HomePageSectionContent:FC=()=>{
    const [showSectionContent,setShowSectionContent]=useState<boolean>(false);
    const { products, isLoading, error } = useSelector((state: RootState) => state.productsData);

    console.log(products);

    const dispatch=useDispatch();
    useEffect(()=>{
        const handleScroll=()=>{
            const scrollPosition:number =window.scrollY;
            const windowHeight:number=window.innerHeight;
    
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
    const selectProducId=(productId:string)=>{
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
            <div className="w-full h-screen pt-10 pb-10 pl-3 pr-3 justify-center items-center flex">
                <Transition show={showSectionContent} enter="transition-opacity duration-500" enterFrom="opacity-0 transform translate-x-full" enterTo="opacity-100 transform translate-x-0">
                    <div>
                        <div>
                            <span className="text-3xl font-bold">SHOP BY CATEGORY</span>
                        </div>
                        <div className="w-full border-b-8 border-black mt-3"></div>
                        <div>
                            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-5 w-full">
                                {products.map((product)=>(
                                    <div className="relative" key={product.key}>
                                        <div className="w-full h-full">
                                            <div className="groupImage transition-transfrom transform-gpu  overflow-hidden">
                                                <Link to={`/products/${product.name}/${product.key}`}>
                                                    <img className="w-64 h-48  hover:scale-110 hover:duration-500" src={product.imageUrl} alt={product.name}/>
                                                </Link>
                                            </div>
                                            <div className="items-center flex justify-between w-full bg-gray-100 p-2">
                                                <Link to={`/products/${product.name}/${product.key}`}>
                                                    <span>{product.name}</span>
                                                </Link>
                                                <button className="block pr-3" onClick={()=>selectProducId(product._id)}><GrShop /></button>
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