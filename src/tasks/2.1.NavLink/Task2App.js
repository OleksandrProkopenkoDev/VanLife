import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import "./Task2App.css";

function Layout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };

  return (
    <div>
      <h3>Welcome to my page!</h3>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "activelink" : "navlink")}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activelink" : "navlink")}
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activelink" : "navlink")}
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <h2>Home</h2>
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <h2>About Me</h2>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <h2>Contact</h2>
    </main>
  );
}

export default function Task2App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
