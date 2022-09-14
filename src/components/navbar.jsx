import React from "react";
import App from "./../App";
import { Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav class=" container flex flex-1 mx-auto  items-baseline sm:justify-center justify-end mt-8 max-w-6xl px-4 sm:px-8 lg:px-12 ">
      <div class=" sm:hidden group text-zinc-300 text-sm font-medium justify-evenly py-2 px-3 w-auto rounded-full ring-1 ring-zinc-500/40  bg-zinc-800">
        <Popover className="relative">
          <Popover.Button>
            <span class="inline-block">Menu</span>
            <span>
              <ChevronDownIcon
                className=" h-5 w-5 font-medium pl-1 text-zinc-300 inline-block "
                stroke="currentColor"
                stroke-width="1"
              />
            </span>
          </Popover.Button>

          <Popover.Panel className="absolute z-10">
            <div className="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </div>
      <div>
        <ul class=" hidden sm:visible sm:flex mx-auto max-w-fit px-7 sm:justify-center ring-1 ring-zinc-500/40 space-x-6  shadow-md text-base sm:text-lg  rounded-full bg-zinc-800 ">
          <li class=" block  py-2 transition ease-in-out duration-300 active:text-cyan-200 hover:text-cyan-400 font-Work font-normal text-sm text-zinc-300 ">
            <a href="#">About</a>
          </li>
          <li class=" block py-2 transition active:text-cyan-200 hover:text-cyan-400 ease-in-out duration-300 font-Work font-normal text-sm  text-zinc-300">
            <a href="#">Projects</a>
          </li>
          <li class=" block transition  py-2  ease-in-out duration-300 hover:text-cyan-400  font-Work font-normal  text-sm text-zinc-300">
            {" "}
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
