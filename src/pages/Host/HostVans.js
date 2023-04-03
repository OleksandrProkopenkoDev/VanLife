import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HostVans.css";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((response) => response.json())
      .then((data) => setHostVans(data.vans));
  }, []);

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
      {hostVans.length > 0 ? (
        <section>{hostVansElements}</section>
      ) : (
        <h2>Loading... or you have no vans yet</h2>
      )}
    </div>
  );
}
