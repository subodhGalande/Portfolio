import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-32 border-t-[1px] p-4 border-zinc-500/40">
        <ul className=" p-1 mx-auto w-max flex ">
          <li className=" inline-block text-base hover:text-blue-400 font-medium text-zinc-400 text-center">
            <a href="#home">Home</a>
          </li>
          <li className=" inline-block text-base px-6  hover:text-blue-400 font-medium text-zinc-400 text-center">
            <a href="#work">Work</a>
          </li>
          <li className=" inline-block text-base font-medium  hover:text-blue-400 text-zinc-400 text-center">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div>
          <p className="font-mono p-2 text-xs text-center text-zinc-300">
            Designed & Build by Subodh Galande{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
