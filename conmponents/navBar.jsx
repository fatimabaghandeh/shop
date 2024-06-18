
import { Link } from "react-router-dom";
import Header from "./headerLinks";


const NavBar = () => {

  return (
    <nav className="flex justify-between bg-black item-center p-0 text-white">

      <Link to="/">
        <h2 className="p-6 font-bold text-2xl">OnlineShop</h2>
      </Link>
     <Header/>
      

      <Link to="/product">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="p-5"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
          </svg>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;