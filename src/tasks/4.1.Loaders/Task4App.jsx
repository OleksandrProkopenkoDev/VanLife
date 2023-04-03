import React from "react";
import HomePage, {loader as homePageLoader} from "./HomePage";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" 
  element={<HomePage />} 
  loader={homePageLoader}
  errorElement={<h2>There was an error</h2>}
  />)
);



export default function Task4App() {
  return <RouterProvider router={router} />;
}
