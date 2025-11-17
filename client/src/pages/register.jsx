import { SimpleRegistrationForm } from "../components/signup-form";

export default function Signup() {
  return (
    <>
      <div>
        <span className="font-mono"> &gt;&gt; pages/register.jsx</span>
      </div>
      <div className="container max-w-96 items-center justify-center mx-auto">
        <SimpleRegistrationForm />
      </div>
    </>
  );
}
