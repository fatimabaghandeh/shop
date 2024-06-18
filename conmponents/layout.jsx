import {  Outlet } from "react-router-dom";
import NavBar from "./navBar";
import {NavNav} from './navnav'
const Layout = ()=>{
    return (
        <div>
            <NavBar/>
            
                <Outlet/>
          

         </div>
    );
};
export default Layout;