import React from "react";
import ReactDOM from "react-dom/client";
import AuthRequired from "./AuthRequired";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} />
      <Route element={<AuthRequired />}>
        <Route path="protected" element={<h1>Super secret info here</h1>} />
      </Route>
    </Route>
  )
);

export default function Task5App() {
  return <RouterProvider router={router} />;
}
