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
import LoginPage, { loginPageLoader } from "./LoginPage";

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
      <Route element={<AuthRequired />}>
        <Route
          path="protected"
          element={<h1>Super secret info here</h1>}
          loader={async () => {
            const rand = Math.random() * 10;
            setTimeout(() => {
              console.log("Protected route");
            }, rand);

            return null;
          }}
        >
          <Route
            path="nested"
            element={<h2>Nested protected route</h2>}
            loader={async () => {
              const rand = Math.random() * 10;
              setTimeout(() => {
                console.log("Nested protected route");
              }, rand);

              return null;
            }}
          />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} loader={loginPageLoader} />
    </Route>
  )
);

export default function Task5App() {
  return <RouterProvider router={router} />;
}
