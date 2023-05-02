// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Link,
// } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import "../src/App.css";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVanDetail";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Info from "./pages/Vans/props/Info";
import Pricing from "./pages/Vans/props/Pricing";
import Photos from "./pages/Vans/props/Photos";
import NotFound from "./components/NotFound";
import Login, { action as loginAction } from "./pages/Login";
import { requireAuth } from "./utils";
import AuthRequireLayout from "./pages/Host/AuthRequireLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={loginAction} />

      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
      ></Route>

      <Route element={<AuthRequireLayout />}>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => {
              return await requireAuth();
            }}
          ></Route>
          <Route
            path="income"
            element={<Income />}
            loader={async () => {
              return null;
            }}
          ></Route>
          <Route
            path="vans"
            element={<HostVans />}
            loader={hostVansLoader}
          ></Route>

          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVansDetailLoader}
          >
            <Route
              index
              element={<Info />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="pricing"
              element={<Pricing />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="photos"
              element={<Photos />}
              loader={async () => {
                return null;
              }}
            />
          </Route>

          <Route
            path="reviews"
            element={<Reviews />}
            loader={async () => {
              return null;
            }}
          ></Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

/*
1. What is the primary reason to use a nested route?
Whenever we have some shared UI between routes in our app.


2. What is a "Layout Route"?
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.


3. What does the <Outlet /> component do? When do you use it?
We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition


4. What is an "Index Route"?
It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.



1. When does the code in a loader function run?

Before the route change happens and the component for that route loads


2. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?
    
    * Don't need to worry about handling loading state in the 
      component
    * Don't need to have lengthy/confusing useEffect code in our
      component
    * Don't need to handle error state in the component
   
   
3. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?
   
   Get rid of the BrowserRouter component and use 
   createBrowserRouter() instead. Can use 
   createRoutesFromElements() to make the transition a bit easier
   
   
   
4. What are the steps we need to take in order to use
   a loader on any given route?
   
   1. Define and export a loader function
   2. Import the loader and pass it to the route we're wanting
      to fetch data for
   3. Use the useLoaderData() hook to get the data from the loader
      function.



*/
