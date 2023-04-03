import { Link, NavLink } from "react-router-dom"; // NavLink is the same as Link, but it has property 'isActive' which we can use to style active link
import userIcon from "../assets/images/user.png";

export default function Header() {
  const activeLinkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="/host"
          className="nav--link"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className="nav--link"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className="nav--link"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={userIcon} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
