import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/products.context";
import ProductCategoryPage from "../productCategoryPage/product-category-page.component";
import { Button } from "@material-tailwind/react";





const ProductPage=()=>{
    const {productId}=useParams();
    const productsData = useContext(DataContext);

    const products = productsData.find(product => product.key === parseInt(productId));
    console.log(products);
    console.log(productId);

    const handleCheckout=()=>{
        console.log("add Checkout Item : ",productId);
    }

    return(
        <>  
            <div className="flex justify-center items-center w-full h-full p-16">
                <div className="w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                        <div>
                            <img width="500px" height="500px" className="max-content" src={products.imageUrl} alt={products.name}/>
                        </div>
                        <div className="h-full ml-10">
                            <div>
                                <span className="text-5xl font-bold ">{products.name}</span>
                            </div>
                            <div className="mt-4">
                                <span className="font-medium text-lg">{products.productInformation}</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-xl font-lg">{products.price} ₺</span>
                            </div>
                            <div>
                                <Button onClick={handleCheckout} color="brown" className="mt-4">Add Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;