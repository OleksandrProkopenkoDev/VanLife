import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("task6LoggingIn");

  const pathname = new URL(request.url).pathname;
  if (!isLoggedIn) {
    console.log("requireAuth isLoggedin: " + isLoggedIn);
    return redirect(`/login?redirectTo=${pathname}`);
  }
  return null;
}
