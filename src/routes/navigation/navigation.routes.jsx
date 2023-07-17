import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

import { UilMoon,UilSun} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from "react-redux"
import { removeToken } from "../../redux/user/user.action"
import products from "../../category.product.json"
import { selectToken } from "../../redux/user/user.selector"
import CartItem from '../../components/cart-item/cart-item.component'

const Navigation=()=>{
    const [isMenuOpen,setMenuOpen]=useState(false);
    const [userMenuOpen,setUserMenuOpen]=useState(false);
    const dispatch=useDispatch();
    const token=useSelector(selectToken);
    const [tokens,setTokens]=useState(null);

    console.log(tokens);
    useEffect(()=>{
        if(token){
            setTokens(token);
        }
    },[token])

    const handleMenuToggle=()=>{
        setMenuOpen(!isMenuOpen);
    };
    const handleUserMenuToogle=()=>{
        setUserMenuOpen(!userMenuOpen);
    };
    const signOutUser=()=>{
        dispatch(removeToken());
        window.location.href=("/");
    };

    

    
    return(
        <>  
          <nav className="navigation max-w-screen w-full h-auto sticky shadow-2xl  items-center text-center justify-between p-8 font-montserrat-alternates z-50">
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
                                <div className="relative">
                                    <div className="absolute top-10 left-0  bg-white rounded-xl shadow-lg p-10 bg-gray-300 z-50">
                                        <div className="asdas grid grid-cols-2 gap-8 w-40 ">
                                            {products.map((product)=>(
                                                <div key={product.key}>
                                                    <div className="asd pb-3">
                                                        <Link to={`/products/${product.name}`}>
                                                            <img className="imageUrl w-5/5 h-20" src={product.imgUrl} alt={product.name}/>
                                                            <span className="assdsd text-center ">{product.name}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                        ))}
                                        </div>
                                        </div>
                                </div>
                                )}
                        </div>
                            <Link to="/contact" className="contact-section-nav-tab text-woodColor">Contact</Link>
                        </div>
                        <div className="nav-tab-third flex items-center justify-end space-x-4 text-xl">
                            {tokens?(
                                <>  
                                    <Link to="/authentication" className="authentication-section-nav-tab text-woodColor">Login</Link>
                                </>
                            ):(
                                <>  
                                    <div className="relative inline-block">
                                        <span className="text-woodColor cursor-pointer" onClick={handleUserMenuToogle}>Test-User</span>
                                        {userMenuOpen &&(
                                            <div className="asd flex absolute bg-gray-500 z-10 right-0 mt-2 w-40 rounded-xl shadow-xl border">
                                                <div className="p-5">
                                                    <Link  to="/dashboard">Dashboard</Link>
                                                    <button className="mt-2" onClick={signOutUser}>Sign Out</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>                                    
                                </>
                            )}
                            <CartItem/>

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