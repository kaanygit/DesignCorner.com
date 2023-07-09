import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

import ArmChair from '../../assets/armchair.jpg'
import WoodChair from '../../assets/woodchair.jpg'
import WoodSofa from '../../assets/woodsofa.webp'
import WoodTable from '../../assets/woodtable.webp'
import { UilShoppingCartAlt ,UilMoon,UilSun} from '@iconscout/react-unicons'

const products= [
    { name: 'Armchair',id:1,imgUrl:ArmChair },
    { name: 'Chair',id:2,  imgUrl:WoodChair },
    { name: 'Table',id:3 ,imgUrl:WoodTable},
    { name: 'Sofa', id:4,imgUrl:WoodSofa },
    { name: 'Coming Soon',id:5, imgUrl:ArmChair },
    { name: 'Coming Soon',id:6, imgUrl:ArmChair },
]


const Navigation=()=>{
    const [isMenuOpen,setMenuOpen]=useState(false);
    const handleMenuToggle=()=>{
        setMenuOpen(!isMenuOpen);
    }
    return(
        <>  
          <nav className="navigation max-w-screen w-full h-auto sticky shadow-2xl  items-center text-center justify-between p-8 font-montserrat-alternates">
                <div className="navigation-divs grid grid-cols-3">
                    <div className="nav-tab-first flex items-center">
                        <h1 className="text-2xl font-bold text-gray-900">DesignCorner.com</h1>
                    </div>
                    <div className="nav-tab-second flex items-center justify-evenly space-x-4 text-xl font-medium">
                        <Link to="/" className="home-section-nav text-woodColor ">Home</Link>
                        <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1 text-xl leading-6 text-gray-900"
                                onClick={handleMenuToggle}
                                aria-expanded={isMenuOpen ? 'true' : 'false'}>
                            <span className="products-section-nav text-woodColor">Products</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"/>
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-10 left-0  bg-white rounded-xl shadow-lg p-10 bg-gray-300">
                                    <div className="asdas grid grid-cols-2 gap-8 w-40 ">
                                        {products.map((product)=>(
                                            <div key={product.id}>
                                                <div className="asd pb-3">
                                                    <Link to={`/${product.name}`}>
                                                        <img className="imageUrl w-5/5 h-20" src={product.imgUrl} alt={product.name}/>
                                                        <span className="assdsd text-center ">{product.name}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                    ))}
                                    </div>
                                    </div>
                                )}
                        </div>
                            <Link to="/contact" className="contact-section-nav-tab text-woodColor">Contact</Link>
                        </div>
                        <div className="nav-tab-third flex items-center justify-end space-x-4 text-xl">
                            <Link to="/authentication" className="authentication-section-nav-tab text-woodColor">Login</Link>
                            <Link to="/checkout">
                                <UilShoppingCartAlt />
                            </Link>
                            <UilMoon />
                            <UilSun className="sun hidden" />
                        </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation