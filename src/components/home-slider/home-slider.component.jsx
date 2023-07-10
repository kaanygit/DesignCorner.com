import { UilAngleLeft,UilAngleRight } from '@iconscout/react-unicons'
import Sofa from '../../assets/armchair.jpg'

const HomeSlider=()=>{

    const homeSliderList=[
        {key:'1',name:'Sofa 1',imageUrl:'../../assets/woodsofa.webp',price:'799',discountRate:'20',productInformation:'Bla Bla Bla'},
        {key:'2',name:'Sofa 2',imageUrl:'../../assets/woodsofa.webp',price:'899',discountRate:'10',productInformation:'Bla Bla Bla'},
        {key:'3',name:'Sofa 3',imageUrl:'../../assets/woodsofa.webp',price:'199',discountRate:'40',productInformation:'Bla Bla Bla'},
        {key:'4',name:'Sofa 4',imageUrl:'../../assets/woodsofa.webp',price:'249',discountRate:'70',productInformation:'Bla Bla Bla'},
        {key:'5',name:'Sofa 5',imageUrl:'../../assets/woodsofa.webp',price:'150',discountRate:'0',productInformation:'Bla Bla Bla'},
        {key:'6',name:'Sofa 6',imageUrl:'../../assets/woodsofa.webp',price:'349',discountRate:'0',productInformation:'Bla Bla Bla'},
        {key:'7',name:'Sofa 7',imageUrl:'../../assets/woodsofa.webp',price:'549',discountRate:'0',productInformation:'Bla Bla Bla'},
    ]

    return(
        <>
            <div className='homeSliderDiv flex w-full h-screen bg-gray-600'>
                <div className='flex items-center justify-evenly w-full h-screen'>
                    <div className='incrementDicrementButton z-10 w-full h-screen items-center justify-around flex'>
                        <button><UilAngleLeft/></button>
                    </div>
                    <div>
                        {homeSliderList.map((productSlider)=>(
                            <div key={productSlider.key} className='flex'>
                                <img src={`url('${productSlider.imageUrl}}')`} alt={productSlider.name}/>
                                <div>  
                                    <div>
                                        <span>{productSlider.name}</span>
                                    </div>
                                    <div>
                                        <span>{productSlider.price}</span>
                                        <span>{productSlider.productInformation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='incrementDicrementButton z-10 w-full h-screen items-center justify-around flex'>
                        <button><UilAngleRight/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSlider;