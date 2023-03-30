import { useParams, useOutletContext } from "react-router-dom";

export default function Pricing() {
  const [van, setVan] = useOutletContext();
  return (
    <div>
      <h3 className="host-van-price">
        ${van.price}
        <span>/day</span>
      </h3>
    </div>
  );
}
