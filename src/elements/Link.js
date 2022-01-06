import { Link } from "react-router-dom";

const NavLink = ({ children, path }) => {
  return (
    <Link
      className="mx-4 font-semibold text-white hover:underline hover:text-blue-300"
      to={path}
    >
      {children}
    </Link>
  );
};

export default NavLink;
