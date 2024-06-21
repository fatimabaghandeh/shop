import {
    createBrowserRouter,
  } from "react-router-dom";
import About from "../pages/about";
import Layout from "../components/layout";
import Detail from "../components/detail";
import Home from "../components/home";
import Products from "../pages/product";
import CartSclice from "../redux/cartSclice";


  const router = createBrowserRouter([
    {
      exact:true,
      path:"/",
      element:<Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
       {
         path: "/product",
          element: <Products/>,
        },
        {
          path: "/cart",
           element: <CartSclice/>,
         },
         {
          path: "/detail/:id",
           element: <Detail/>,
         },
     
      ]
    },
   
  ]);
export default router;  


