import { useParams, useOutletContext } from "react-router-dom";

export default function Info() {
  const [van, setVan] = useOutletContext();

  return (
    <div>
      {van ? (
        <>
          <p>
            <span>Name: </span>
            {van.name}
          </p>
          <p>
            <span>Category: </span>
            {van.type}
          </p>
          <p>
            <span>Description: </span>
            {van.description}
          </p>
          <p>
            <span>Visibility: </span>Public
          </p>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
