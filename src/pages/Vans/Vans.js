import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Vans.css";

export default function Vans() {
  const [vans, setVans] = useState([]);
  let vansElements = [];

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  vansElements = vans.map((van) => {
    return (
      <div className="van-tile" key={van.id}>
        <Link to={`/vans/${van.id}`}>
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

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vansElements}</div>
    </div>
  );
}
