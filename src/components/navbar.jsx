import React from "react";

const Navbar = () => {
  return (
    <nav class=" flex justify-around sm:justify-end md:justify-end  p-3  ">
      <div>
        <ul class=" shadow-md space-x-9 py-2 px-7 rounded-full bg-zinc-800 ">
          <li class=" inline-block  font-Work font-medium  text-gray-50 ">
            About
          </li>
          <li class=" inline-block   font-Work font-medium   text-gray-50">
            Projects
          </li>
          <li class="inline-block  font-Work font-medium   text-gray-50">
            {" "}
            Blog{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
