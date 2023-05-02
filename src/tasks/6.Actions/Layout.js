import React from "react";
import { Outlet, Link, redirect } from "react-router-dom";

function fakeLogoutUser() {
  localStorage.removeItem("task6LoggingIn");
  console.log("item removed");
  console.log(localStorage.getItem("task6LoggingIn"));
  //   return redirect("/home");
}

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="protected">Protected</Link>
        <Link to="protected/nested">Nested</Link>
        <Link to="login">Login</Link>
        <button onClick={fakeLogoutUser}>X</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
