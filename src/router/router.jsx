import {
  createBrowserRouter,
} from "react-router-dom";
import About from "../pages/about";
import Layout from "../../conmponents/layout";
import App from "../pages/product";
import Home from "../../conmponents/home";
import Cart from "../../conmponents/cart";
import Detail from "../../conmponents/detail";

const router = createBrowserRouter([
  {
    exact:true,
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/cart",
         element: <Cart/>,
       },
       {
        path: "/detail/:id",
         element: <Detail/>,
       },

    ]
  },

]);
export default router;  
