import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequireLayout() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <>
        <Outlet />
      </>
    );
  } else return <Navigate to="/login?message=You must log in first" />;
}
