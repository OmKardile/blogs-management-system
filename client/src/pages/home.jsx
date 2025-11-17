import { Outlet } from "react-router";
import { NavbarDefault } from "../components/navbar";
import Blogpage from "./blogpage";
import Stats from "../components/stats";
import Blogpost from "../components/blogpost";
export default function Home() {
  return (
    <>
      <div className="mx-3">
        <NavbarDefault />
      </div>
      <div>
        {/* <Blogpost /> */}
        <Blogpage />
        <Outlet />
      </div>

      <div>
        Footer (HardCodedForNow)--
        <div>
          <Stats />
        </div>
      </div>
    </>
  );
}
