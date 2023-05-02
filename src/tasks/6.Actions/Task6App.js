import React from "react";
import ReactDOM from "react-dom/client";
import AuthRequired from "./AuthRequired";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
  useNavigate,
} from "react-router-dom";

import Layout from "./Layout";
import LoginPage, {
  action as loginAction,
  loader as loginLoader,
} from "./LoginPage";
import Protected, { loader as loaderProtected } from "./Protected";
import { requireAuth } from "./requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<h1>Home page</h1>}
        loader={async () => {
          return null;
        }}
      />

      <Route path="protected" element={<Protected />} loader={loaderProtected}>
        <Route
          path="nested"
          element={<h2>Nested protected route</h2>}
          loader={async ({ request }) => {
            await requireAuth(request);
            return null;
          }}
        />
      </Route>
      <Route element={<AuthRequired />}></Route>
      <Route
        path="login"
        element={<LoginPage />}
        action={loginAction}
        loader={loginLoader}
      />
    </Route>
  )
);

export default function Task6App() {
  return <RouterProvider router={router} />;
}
