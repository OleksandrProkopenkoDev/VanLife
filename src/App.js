import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import "../src/styles/App.css";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Info from "./pages/Vans/props/Info";
import Pricing from "./pages/Vans/props/Pricing";
import Photos from "./pages/Vans/props/Photos";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div className="page">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>

              <Route path="vans" element={<Vans />}></Route>
              <Route path="vans/:id" element={<VanDetail />}></Route>

              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="income" element={<Income />}></Route>
                <Route path="vans" element={<HostVans />}></Route>

                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<Info />} />
                  <Route path="pricing" element={<Pricing />} />
                  <Route path="photos" element={<Photos />} />
                </Route>

                <Route path="reviews" element={<Reviews />}></Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
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

*/
