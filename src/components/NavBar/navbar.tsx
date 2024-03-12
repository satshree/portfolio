import { useLocation } from "react-router-dom";
import { routes } from "../../routes";

import style from "./navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const allRoutes = routes.filter((route) => route.text !== "");

  return (
    <div className={`center ${style.navbar}`}>
      {allRoutes.map((route) => (
        <Link
          key={route.text}
          to={route.to}
          className={`${style.nav} ${
            location.pathname === route.to ? style.active : null
          }`}
        >
          {route.text}
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
