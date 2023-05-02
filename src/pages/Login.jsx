import { useState } from "react";
import {
  useSearchParams,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigation = useNavigation();
  const errorMessage = useActionData();

  return (
    <div className="login-container">
      <h1>Sign in your account</h1>
      {errorMessage && <h4 className="red">{errorMessage}</h4>}
      {searchParams.get("message") && (
        <h3 className="red">{searchParams.get("message")}</h3>
      )}
      <Form method="post" className="login-form" replace>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <button disabled={navigation.state === "idle" ? false : true}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    const data = await loginUser({ email, password });

    localStorage.setItem("loggedIn", "true");
    console.log(data);
    redirect("/host");
    return "Successfully logged in";
  } catch (err) {
    return err.message;
  } finally {
  }
}

// function handleSubmit(e) {
//   setStatus("submitting");
//   setError(null);
//   e.preventDefault();
//   loginUser(loginFormData)
//     .then((data) => navigate("/host", { replace: true }))
//     .catch((err) => setError(err))
//     .finally(() => setStatus("idle"));
// }
