import { Routes,Route, Navigate } from "react-router-dom";
import Navigation from './routes/navigation/navigation.routes'
import Home from './routes/home/home.routes'
import Products from "./routes/products/products.routes";
import Authentication from './routes/authentication/authentication.routes'
import Contact from './routes/contact/contact.routes'
import NotFound from './routes/notFound/notFound.routes'
import Checkout from "./routes/checkout/checkout.routes";
import ForgotPassword from './components/forgotPassword/forgot-password.component'
import Dashboard from './routes/dashboard/dashboard.routes'
import ProductPage from "./components/productPage/product-page.component";
import { useSelector } from "react-redux";
import { selectToken } from "./redux/user/user.selector";
import ProductCategoryPage from "./components/productCategoryPage/product-category-page.component";
import { ProductList } from "./redux/products/products.api";


function App() {
  ProductList();
  const token=useSelector(selectToken).token;
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
          <Route path='products' element={<Products/>}/>
          <Route path="products/:categoryName" element={<ProductCategoryPage/>}/>
          <Route path="products/:categoryName/:productId" element={<ProductPage/>}/>
          <Route path='contact' element={<Contact/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path="*" element={<NotFound/>} />
          {token===null?(null):(<Route path="dashboard" element={<Dashboard/>}/>)}
          <Route index element={<Home/>}/>
      </Route>
        <Route path="/authentication" element={token===null?<Authentication/>:<Navigate to="/dashboard"/>}/>
        <Route path="forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
);
}

export default App;
