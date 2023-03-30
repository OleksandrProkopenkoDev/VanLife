import { useParams, useOutletContext } from "react-router-dom";

export default function Photos() {
  const [van, setVan] = useOutletContext();
  return (
    <div>
      <img src={van.imageUrl} className="host-van-detail-image" />
    </div>
  );
}
