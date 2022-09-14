import React from "react";
import App from "./../App";

const Navbar = () => {
  return (
    <nav class="mt-5">
      <div>
        <ul class="container mx-auto flex justify-around w-4/5 sm:w-6/12 lg:w-2/5 shadow-md text-base sm:text-lg  py-1 rounded-full bg-zinc-800 ">
          <li class=" inline-block transition ease-in-out duration-300 active:text-cyan-200 hover:text-cyan-400 font-Work font-normal   text-gray-50 ">
            <a href="#">About</a>
          </li>
          <li class=" inline-block transition active:text-cyan-200 hover:text-cyan-400 ease-in-out duration-300 font-Work font-normal   text-gray-50">
            <a href="#">Projects</a>
          </li>
          <li class="inline-block transition active:text-cyan-200 ease-in-out duration-300 hover:text-cyan-400  font-Work font-normal   text-gray-50">
            {" "}
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
