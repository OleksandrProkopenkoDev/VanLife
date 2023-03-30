import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

import "./HostVanDetail.css";

export default function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <>
      <br />
      <Link className="link-back-to-vans" to=".." relative="path">
        &larr; Back to all vans
      </Link>
      <div className="host-van-detail-container">
        {van ? (
          <>
            <div className="host-van-detail-card">
              <img className="host-van-detail-img" src={van.imageUrl} />
              <div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h1>{van.name}</h1>
                <p>
                  <span className="host-van-detail-price">${van.price}</span>
                  /day
                </p>
              </div>
            </div>

            <nav className="host-van-nav">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
                to="."
                end
              >
                Details
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
                to="pricing"
              >
                Pricing
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-link"
                }
                to="photos"
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={[van, setVan]} />
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}
