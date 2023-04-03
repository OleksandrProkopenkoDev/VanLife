import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./HostVans.css";
import { getHostVans } from "../../api";

export function loader() {
  return getHostVans();
}

export default function HostVans() {
  const hostVans = useLoaderData();

  const hostVansElements = hostVans.map((van) => {
    return (
      <Link to={van.id} key={van.id}>
        <div className="host-vans-container">
          <img className="host-vans-img" src={van.imageUrl} />
          <div className="description">
            <h2 className="host-vans-name">{van.name}</h2>
            <p className="host-vans-price">${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Your listed vans</h1>
      <section>{hostVansElements}</section>
    </div>
  );
}
