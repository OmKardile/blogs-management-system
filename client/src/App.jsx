import { Typography, Card, Button } from "@material-tailwind/react";

import { Routes, Route } from "react-router";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import Blogpost from "./components/blogpost";
import Myblogs from "./pages/myblogs";

export default function App() {
  return (
    <>
      {/* //importing components here */}

      <div className="container min-w-full">
        <Routes>
          <Route path="*" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogpost" element={<Blogpost />} />
          <Route path="/Myblogs" element={<Myblogs />} />
          <Route path="/home" element={<Home />}>
            <Route path="" element="" />
            <Route path="" element="" />
            <Route path="" element="" />
            <Route path="" element="" />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}
