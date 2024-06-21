import cs from "classnames";
import { Link, useLocation } from "react-router-dom";
 
const links = [
  {
    title: "product",
    pathname: "/product",
  },
  {
    title: "home",
    pathname: "/",
  },
  {
    title: "about",
    pathname: "/about",
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
            "mx-2 px-8 py-2 rounded-lg",
            pathname === link.pathname ? "bg-primaryy" : "hover:bg-primaryy"
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
