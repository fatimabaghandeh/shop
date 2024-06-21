
import { Link } from "react-router-dom";
import Header from "./headerLinks";
import { useSelector } from "react-redux";




const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="flex justify-between bg-black items-center p-0 text-white">
      <Link to="/">
        <h2 className="p-6 font-bold text-2xl">OnlineShop</h2>
      </Link>
      <Header />
      <Link to="/cart">
        <button>Cart({totalItems})</button>
      </Link>
    </nav>
  );
};

export default NavBar;
