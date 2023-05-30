import { Outlet } from "react-router-dom"; // this is a React component, that contains all nested routes components
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="page">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
