import React, { useState } from "react";
import { Link } from "react-router-dom";
import Control from "../assets/svg/Control";
import Logo from "../assets/svg/Logo";
import Post from "../assets/svg/Post";
import User from "../assets/svg/User";
import LeftSelect from "../components/LeftSelect";

function Left() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
     border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <Control />
        </div>
        <div className="flex gap-x-4 items-center">
          <div
            className={`cursor-pointer duration-500 w-8 ${
              open && "rotate-[360deg]"
            }`}
          >
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "hidden"
            }`}
          >
            Weshare Admin
          </h1>
        </div>
        <div className="pt-6">
          <Link to="/userManagement">
            <LeftSelect open={open} svg={<User />} text="User Management" />
          </Link>
          <Link to="/postManagement">
            <LeftSelect open={open} svg={<Post />} text="Post Management" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Left;
