import { FC, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../redux/root-reducer';
import {AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';


const HomeSlider:FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const [sliderIndex,setSliderIndex]=useState<number>(1);
    // const HomeSliderList: ProductData[] = useSelector(selectProducts);
    const { products, isLoading, error } = useSelector((state: RootState) => state.productsData);
    const HomeSliderList=products;
    console.log(isLoading);
    console.log(error);



    const sliderListLenght=HomeSliderList.length;
    const sliderBack=()=>{
        if(sliderIndex<=1){
            setSliderIndex(sliderListLenght);
        }else{
            setSliderIndex(sliderIndex-1);
            setShowPageTransition(true);
        }
    }
    const sliderFoward=()=>{
        if(sliderIndex>=7){
            setSliderIndex(1);
        }else{
            setSliderIndex(sliderIndex+1);
            setShowPageTransition(true);
        }
    }

    useEffect(()=>{
        setShowPageTransition(true);
    },[])



    return(
        <>
            <div className='homeSliderDiv flex w-full h-full  z-0 '>
                <div className='grid grid-cols-5 gap-4 w-full h-full '>
                    <div className='incrementDicrementButton h-screen items-center justify-around flex'>
                        <button onClick={sliderBack}><AiOutlineArrowLeft/></button>
                    </div>
                    <div className='flex items-center justify-center w-full h-full col-span-3 '>
                        {HomeSliderList.map((productSlider)=>(
                            sliderIndex===productSlider.key ? (                            
                                <div key={productSlider._id} className='flex pb-32 pr-32 pl-32 pt-20 items-center w-full h-full relative'>
                                    <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                                        <Link to={`/products/${productSlider.name}/${productSlider.key}`}>
                                            <img className='w-full h-full rounded-3xl' src={productSlider.imageUrl} alt={productSlider.name}/>
                                        </Link>
                                    </Transition>
                                        <div className='absolute w-48 h-36 top-20 right-32 p-4 rounded-3xl'>
                                            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                                                <div className='font-bold text-4xl mb-2 border-b border-black text-black'>{productSlider.name}</div>
                                            </Transition>
                                            {productSlider.discountRate!==0?(
                                                <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                                                    <div className='flex'>
                                                        <div className="line-through">{productSlider.price}₺</div>
                                                        <div className='text-center pl-2 pr-2 justify-center h-full'><BsArrowRight/></div>
                                                        <div>{(productSlider.price*productSlider.discountRate)/100}₺</div>
                                                    </div>
                                                </Transition>
                                        ):(
                                            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                                                <div>{productSlider.price}₺</div>
                                            </Transition>
                                            )}
                                            <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                                                <div>{productSlider.productInformation}</div>
                                            </Transition>
                                    </div>
                                </div>
                            ):null
                        ))}
                    </div>
                    <div className='incrementDicrementButton z-10 w-full h-screen items-center justify-around flex'>
                        <button onClick={sliderFoward}><AiOutlineArrowRight/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSlider;


