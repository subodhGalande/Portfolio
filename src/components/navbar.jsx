import React from "react";
import App from "./../App";

const Navbar = () => {
  return (
    <nav class="mt-5 max-w-6x7 ">
      <div>
        <ul class="flex mx-auto max-w-fit px-7 justify-center space-x-6  shadow-md text-base sm:text-lg  rounded-full bg-zinc-800 ">
          <li class=" relative block  py-2 transition ease-in-out duration-300 active:text-cyan-200 hover:text-cyan-400 font-Work font-normal text-sm text-zinc-300 ">
            <a href="#">About</a>
          </li>
          <li class=" relative block py-2 transition active:text-cyan-200 hover:text-cyan-400 ease-in-out duration-300 font-Work font-normal text-sm  text-zinc-300">
            <a href="#">Projects</a>
          </li>
          <li class=" rlative block transition  py-2  ease-in-out duration-300 hover:text-cyan-400  font-Work font-normal  text-sm text-zinc-300">
            {" "}
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
