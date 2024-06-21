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
    <header className="flex justify-between items-center p-4 text-white" >
      {links.map((link, index) => (
        <Link
          key={index}
          className={cs(pathname === link.pathname ? "bg-primaryy rounded-lg px-8 py-2  mx-2" : "hover:bg-primaryy px-8 py-2 rounded-lg space-x-3 ")}
          to={link.pathname}

        >
          <div className="">{link.title}</div>
        </Link>
      ))}

    </header>
  );
};

export default Header;