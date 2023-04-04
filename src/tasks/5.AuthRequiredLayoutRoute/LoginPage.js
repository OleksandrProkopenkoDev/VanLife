import { useSearchParams, useLoaderData } from "react-router-dom";

export default function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData();
  return (
    <div>
      {searchParams.get("message") && <h3>{searchParams.get("message")}</h3>}
      {data && <h3>{data}</h3>}
      <h2>Login page goes here </h2>
    </div>
  );
}

export function loginPageLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
