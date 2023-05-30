import { Link, useLoaderData, useSearchParams, defer } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Vans.css";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get("type");
  const vans = useLoaderData();
  let vansElements = [];

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  vansElements = filteredVans.map((van) => {
    return (
      <div className="van-tile" key={van.id}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), type: typeFilter }}
        >
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              {van.price}
              <span>/day</span>
            </p>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </div>
        </Link>
      </div>
    );
  });

  if (error) {
    return <h2>There was an error {error.message}</h2>;
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>

      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple${
            typeFilter === "simple" ? " selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type rugged${
            typeFilter === "rugged" ? " selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          className={`van-type luxury${
            typeFilter === "luxury" ? " selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="van-list">{vansElements}</div>
    </div>
  );
}
