import { useContext } from "react"
import { DataContext } from "../../context/products.context"
import { Link, useParams } from "react-router-dom";
import productCategory from "../../category.product.json"

const ProductCategoryPage=({productId})=>{
    const { categoryName } = useParams();
    const products=useContext(DataContext);
    const category=productCategory.find(category=>category.name===parseInt(categoryName));

    const capitalizeString=(str)=>{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }

    let productIndex=products.filter(item=>item.name===capitalizeString(categoryName));
    console.log(productIndex);
    return(
        <>
            <div className="w-full p-16  flex font-montserrat-alternates">
                <div className="w-full h-full">  
                    <div className="justify-start">
                        <span className="text-4xl font-bold  border-b-2 border-black ">{categoryName.toUpperCase()}</span>
                    </div>
                        {productIndex.length ===0?(
                            <div className="text-center justify-center w-full h-48 flex items-center">
                                <div className="text-3xl font-lg flex grid grid-cols-1 ">
                                    <span>Product Not Found 😞</span>
                                    <span className="mt-5 ">But don't worry it will be here again soon 🥲</span>
                                </div>
                            </div>
                        ):(
                            <div className="w-full mt-8 items-center flex grid grid-cols-4 gap-8 flex pb-16 items-center justify-center">
                                {productIndex.map((product)=>(
                                <div key={product.key}>
                                    <div className="w-full h-full text-center items-center justify-center transition-transform transform-gpu overflow-hidden ">
                                        <Link to={`${product.key}`}>
                                            <img className="w-full h-48 object-cover  hover:scale-110 hover:duration-500 " src={product.imageUrl} alt={product.name}/>
                                        </Link>
                                    </div>
                                    <div className="flex justify-evenly w-full text-2xl mt-3">
                                        <span className="font-medium">{product.name}</span>
                                        <span>-</span>
                                        <span className="font-lg">{product.price} ₺</span>
                                    </div>
                                </div>
                            ))}
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default ProductCategoryPage;