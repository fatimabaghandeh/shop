import {  Outlet } from "react-router-dom";
import NavBar from "./navBar";
const Layout = ()=>{
    return (
        <div>
            <NavBar/>
            
                <Outlet/>
          

         </div>
    );
};
export default Layout;