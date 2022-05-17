import React, { useState } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <>
      <header class="text-gray-200  bg-gray-900 body-font sticky top-0">
        <div class="container mx-auto flex p-4 flex-row items-center justify-between">
          <a class="flex title-font font-medium items-center text-white ">
            <img src={logo} alt="logo" className="w-10" />
            <span class="ml-3 text-xl">CRUD App</span>
          </a>

          <Link to="/crud-app" className="ml-auto mr-4">
            Home
          </Link>

          <Link
            to="/Create"
            class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base"
          >
            Add Users
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
