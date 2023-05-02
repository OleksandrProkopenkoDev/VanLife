import { Outlet, redirect } from "react-router-dom";
import { requireAuth } from "./requireAuth";

export async function loader({ request }) {
  const url = new URL(request.url);
  await requireAuth(request);

  return null;
}

export default function Protected() {
  return (
    <div>
      <h1>Super secret info here</h1>
      <Outlet />
    </div>
  );
}
