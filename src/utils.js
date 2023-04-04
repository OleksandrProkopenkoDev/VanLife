import { redirect, useNavigate, Navigate } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // console.log("trying to redirect to /login");

    return null;
  }
  return null;
}
