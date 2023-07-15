import { Routes,Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.routes'
import Home from './routes/home/home.routes'
import Products from "./routes/products/products.routes";
import Authentication from './routes/authentication/authentication.routes'
import Contact from './routes/contact/contact.routes'
import NotFound from './routes/notFound/notFound.routes'
import Checkout from "./routes/checkout/checkout.routes";
import ForgotPassword from './components/forgotPassword/forgot-password.component'
import Dashboard from './routes/dashboard/dashboard.routes'
import { useSelector } from "react-redux";
import ProductPage from "./components/productPage/product-page.component";
import ProductCategoryPage from "./components/productCategoryPage/product-category-page.component";
function App() {
  const token=useSelector((state)=>state.token);
  // const productCategoryRoute=useContext(DataContext);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path="products/:categoryName" element={<ProductCategoryPage/>}/>
        <Route path="products/:categoryName/:productId" element={<ProductPage/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path="*" element={<NotFound/>} />


        {token?(
          <Route path="dashboard" element={<Dashboard/>} />
        ):null}
      </Route>
      {!token?(
        <Route path="/authentication" element={<Authentication/>}/>
      ):(
        null
      )}
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
);
}

export default App;
