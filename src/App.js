import { Routes,Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.routes'
import Home from './routes/home/home.routes'
import Products from "./routes/products/products.routes";
import Authentication from './routes/authentication/authentication.routes'
import Contact from './routes/contact/contact.routes'
import NotFound from './routes/notFound/notFound.routes'
import Checkout from "./routes/checkout/checkout.routes";
import ForgotPassword from './components/forgotPassword/forgot-password.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
      <Route path="/authentication" element={<Authentication/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    </Routes>
  );
}

export default App;
