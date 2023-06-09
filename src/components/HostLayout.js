import { NavLink, Outlet } from "react-router-dom";
import "./HostLayout.css";

export default function HostLayout() {
  const activeLinkStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div>
      <nav className="host-nav">
        <NavLink
          to="."
          end
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
