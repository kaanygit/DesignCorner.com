import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DataContext } from "../../context/products.context";


const Contact = () => {
  const products=useContext(DataContext);
  console.log(products);

  return (
    <>
        <div>
          <h1>Contact</h1>
        </div>
        <Outlet/>
    </>
  );
};

export default Contact;
