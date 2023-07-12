import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useState } from "react";
import Foto from '../../assets/woodchair.jpg'
import PRODUCT from '../../slider.products.json'
import {UilShoppingCartAlt} from '@iconscout/react-unicons'

const HomePageSectionContent=()=>{
    const [showSectionContent,setShowSectionContent]=useState(false);

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
                            <div className="grid grid-cols-5 gap-6 mt-5 w-full">
                                {PRODUCT.map((products)=>(
                                    <div className="relative">
                                        <div className="w-full h-full">
                                            <div className="groupImage transition-transfrom transform-gpu  overflow-hidden">
                                                <img className="w-64 h-48  hover:scale-110 hover:duration-500 " src={products.imageUrl} alt={products.name}/>
                                            </div>
                                            <div className="items-center flex justify-between w-full bg-gray-100 p-2">
                                                <span>{products.name}</span>
                                                <button className="block pr-3"><UilShoppingCartAlt /></button>
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