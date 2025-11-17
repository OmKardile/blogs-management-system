import { SimpleLoginForm } from "../components/login-form";

export default function Login() {
  return (
    <>
      <div>
        <span className="font-mono"> &gt;&gt; pages/login.jsx</span>
      </div>
      <div className="container max-w-96 items-center justify-center mx-auto">
        <SimpleLoginForm />
      </div>
    </>
  );
}
