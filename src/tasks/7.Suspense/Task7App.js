import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import "./Task7.css";
import Weather, { loader as weatherLoader } from "./Weather";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} />
      <Route path="weather" element={<Weather />} loader={weatherLoader} />
    </Route>
  )
);

export default function Task7App() {
  return <RouterProvider router={router} />;
}
