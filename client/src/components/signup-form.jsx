import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../services/user.js";
import { toast } from "react-toastify";

export function SimpleRegistrationForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const signup = async () => {
    //to-do  -> check for the validations if user have entered the data in the input fields
    const result = await registerUser(name, email, password, mobile);
    if (result.status == "success") {
      toast.success("Signup Successful");
      navigate("/home");
    } else toast.error(result.error);
  };

  return (
    <Card color="transparent" shadow={false} className="m-5 mt-28 ">
      <Typography variant="h4" color="blue-gray">
        Join Blogging Now ...!
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="Your full name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Number
          </Typography>
          <Input
            size="lg"
            placeholder="number"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button onClick={signup} className="mt-6" fullWidth>
          sign up
        </Button>

        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Typography className="font-medium text-gray-900">
            <Link to="/login">Sign In</Link>
          </Typography>
        </Typography>
      </div>
    </Card>
  );
}
