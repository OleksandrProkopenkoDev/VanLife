import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  // fake auth
  //If user is not login, then redirect to login route
  //Otherwise: return <Outlet />
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
