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
import ProductCategoryPage from "./components/productCategoryPage/product-category-page.component";
import { useSelector } from "react-redux";
import { selectToken } from "./redux/user/user.selector";


function App() {
  const token=useSelector(selectToken);
  console.log(token);
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
        <Route path="dashboard" element={token?<Navigate to="/authentication"/>:<Dashboard/>}/>
      </Route>

        <Route path="/authentication" element={token?<Authentication/>:<Navigate to="/dashboard"/>}>
          <Route path="forgotpassword" element={<ForgotPassword/>}/>
        </Route>
    </Routes>
);
}

export default App;
