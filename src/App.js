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
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  const token=useSelector((state)=>state.token);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path="*" element={<NotFound/>} />


        {!token?(
          <Route path="dashboard" element={<Dashboard/>} />
        ):null}
      </Route>
      {token!==null?(
        <Route path="/authentication" element={<Authentication/>}/>
      ):(
        null
      )}
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
);
}

export default App;
