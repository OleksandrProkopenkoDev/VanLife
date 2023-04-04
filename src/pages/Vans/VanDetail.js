import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  useLoaderData,
  redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./VanDetail.css";
import { getVans } from "../../api";

export function loader({ params }) {
  // const navigate = useNavigate();
  console.log("VanDetail. trying to redirect to /login");
  // navigate("/login");
  redirect("login");
  return getVans(params.id);
}

export default function VanDetail() {
  // const [van, setVan] = useState(null);
  // const params = useParams();
  const location = useLocation();
  const van = useLoaderData();

  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((response) => response.json())
  //     .then((data) => setVan(data.vans));
  // }, [params.id]);

  const search = location.state?.search || ""; // this means 'if location.state exists then search = location.state.search      if not exists, then search = ""
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <br />
      <Link className="link-back-to-vans" to={`..?${search}`} relative="path">
        &larr; Back to {type} vans
      </Link>

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
    </div>
  );
}
