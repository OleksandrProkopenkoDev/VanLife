import { useParams, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./VanDetail.css";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || ""; // this means 'if location.state exists then search = location.state.search      if not exists, then search = ""
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <br />
      <Link className="link-back-to-vans" to={`..?${search}`} relative="path">
        &larr; Back to {type} vans
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}
