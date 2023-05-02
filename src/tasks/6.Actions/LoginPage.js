import React from "react";
import {
  useNavigate,
  useNavigation,
  Form,
  useSearchParams,
  useActionData,
  redirect,
} from "react-router-dom";
import "./Actions.css";

export async function loader({ request }) {
  // console.log(request.url);

  return null;
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo");
  try {
    const user = await fakeLoginUser({ email, password });
    console.log(pathname);

    return pathname === null ? redirect("/protected") : redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeLoginUser(creds) {
  await sleep(1000);
  if (creds.email === "b@b.com" && creds.password === "p123") {
    localStorage.setItem("task6LoggingIn", true);
    return {
      email: creds.email,
      token: "1234567890abcdef",
    };
  }

  throw new Error("Couldn`t log the user in");
}

export default function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  const errorMessage = useActionData();
  return (
    <>
      {searchParams.get("message") && <h3>{searchParams.get("message")}</h3>}

      <Form method="post" replace>
        <h2>Login</h2>
        {errorMessage && <h4 className="red">{errorMessage}</h4>}
        <input type="email" name="email" placeholder="Email address" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <button disabled={navigation.state === "submitting" ? true : false}>
          {navigation.state === "submitting" ? "Logining in..." : "Log in"}
        </button>
      </Form>
    </>
  );
}
