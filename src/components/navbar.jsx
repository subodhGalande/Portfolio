import React from "react";
import App from "./../App";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav class=" container flex flex-1 mx-auto  items-baseline sm:justify-center justify-end mt-8 max-w-6xl px-4 sm:px-8 lg:px-12 ">
      <div class=" sm:hidden group text-zinc-300 text-sm font-medium justify-evenly py-2 px-3 w-auto rounded-full ring-1 ring-zinc-500/40  bg-zinc-800">
        <Popover className="relative">
          <Popover.Button class="outline-none">
            <span class="inline-block ">Menu</span>
            <span>
              <ChevronDownIcon
                className=" h-5 w-5 font-medium pl-1 text-zinc-300 inline-block "
                stroke="currentColor"
                stroke-width="1"
              />
            </span>
          </Popover.Button>
          <Popover.Overlay className="fixed z-5 inset-0 bg-black/80 opacity-100 backdrop-blur-sm  " />

          <Transition
            enter="transition-opacity duration-500"
            enterFrom="opacity-0 ease-in "
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100  "
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-10 ">
              <div class="fixed grid inset-x-4 top-7 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-500/40 bg-zinc-900  opacity-100 scale-100">
                {" "}
                <div class="flex flex-row justify-between">
                  <h6 class="inline-block text-zinc-400">Menu</h6>
                  <Popover.Button
                    class="inline-block"
                    aria-label="Close menu"
                    type="button"
                    data-headlessui-state="open"
                    tabindex="0"
                  >
                    {" "}
                    <XMarkIcon
                      className=" h-5 w-5 font-medium pl-1 text-zinc-400 inline-block "
                      stroke="currentColor"
                      stroke-width="1"
                    />
                  </Popover.Button>
                </div>
                <ul class=" mt-4 divide-y divide-zinc-100 font-sans text-base font-normal text-zinc-300 divide-zinc-100/5 ">
                  <li>
                    {" "}
                    <Popover.Button class="pt-3 pb-2">About</Popover.Button>
                  </li>
                  <li>
                    <Popover.Button class="pt-3 pb-2">Projects</Popover.Button>
                  </li>
                  <li>
                    <Popover.Button class="pt-3 pb-2">Blog</Popover.Button>
                  </li>
                </ul>
              </div>
              <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
          </Transition>
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

<button
  aria-label="Close menu"
  class="-m-1 p-1"
  type="button"
  data-headlessui-state="open"
  tabindex="0"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    class="h-6 w-6 text-zinc-500 dark:text-zinc-400"
  >
    <path
      d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
</button>;
