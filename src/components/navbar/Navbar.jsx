import { Link } from "react-router-dom";
import logo from "/src/assets/mv-high-resolution-logo-transparent.png";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between fixed top-0 w-full pt-5">
        <h6 className="ml-10 text-2xl hover:opacity-25 cursor-pointer transition-opacity">
          WORK
        </h6>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-8 hover:opacity-25 cursor-pointer transition-opacity"
          />
        </Link>
        <p className="mr-10 text-2xl hover:opacity-25 cursor-pointer transition-opacity">
          ABOUT
        </p>
      </div>
    </div>
  );
}
