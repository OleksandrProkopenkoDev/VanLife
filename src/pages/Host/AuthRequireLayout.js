import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequireLayout() {
  const loggedIn = localStorage.getItem("loggedIn");
  const isLoggedIn = loggedIn === "true" ? true : false;
  console.log("isLoggedin: " + isLoggedIn);
  if (isLoggedIn) {
    return (
      <>
        <Outlet />
      </>
    );
  } else return <Navigate to="/login?message=You must log in first" />;
}
