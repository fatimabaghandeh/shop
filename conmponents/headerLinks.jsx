import cs from "classnames";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    title: "products",
    pathname: "/product",
  },
  {
    title: "home",
    pathname: "/",
  },
  {
    title: "carts",
    pathname: "/cart",
  },
];

const Header = () => {
  let location = useLocation();
  const { pathname } = location;

  return (
    <header className="flex justify-between items-center p-4 text-white">
      {links.map((link, index) => (
        <Link
          key={index}
          className={cs(
            "rounded-lg px-8 py-2 mx-2",
            { "bg-orange-100 text-black": pathname === link.pathname },
            { "hover:bg-primaryy text-white hover:text-black": pathname !== link.pathname }
          )}
          to={link.pathname}
        >
          <div>{link.title}</div>
        </Link>
      ))}
    </header>
  );
};

export default Header;
