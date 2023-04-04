import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    setStatus("submitting");
    setError(null);
    e.preventDefault();
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in your account</h1>
      {error && <h3 className="red">{error.message}</h3>}
      {searchParams.get("message") && (
        <h3 className="red">{searchParams.get("message")}</h3>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "idle" ? false : true}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
