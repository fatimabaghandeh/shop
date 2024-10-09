import cs from "classnames";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    title: "products",
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
            "rounded-lg md:px-8 px-6 py-2 mx-2",
            { "bg-gray text-black": pathname === link.pathname },
            { "hover:bg-gray text-white hover:text-black": pathname !== link.pathname }
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
