import React from "react";
import one from "../assets/onedesk.png";
import sbmo from "../assets/sbmo.png";
import stox from "../assets/stoxticker.png";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <section className="container mx-auto mt-28 px-4 md:px-8 lg:px-12">
        {" "}
        <p class=" text-center lg:text-5xl text-4xl tracking-normal font-pop font-bold text-zinc-100 max-w-4xl">
          Things I've Built
        </p>{" "}
        <div className=" relative mt-20 mx-auto h-[28rem] w-full  ">
          <img
            src={one}
            className=" h-full object-cover mx-auto rounded-xl shadow-zinc-900 shadow-md brightness-[.1] "
          />
          <span className=" absolute top-0 px-6 ">
            <div className="mt-10">
              <small className="text-cyan-400 text-sm font-mono">
                Featured Project
              </small>
              <h1 className="text-white text-2xl mt-2 font-semibold ">
                OneDesk
              </h1>
            </div>

            <h2 className="text-zinc-300 text-base mt-10">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, laborum veniam earum unde rerum dolor sunt magnam
              dolores aperiam dolore incidunt rem tenetur quam numquam quasi
              nobis nam sint quo?{" "}
            </h2>

            <ul className="mt-14 text-sm text-white font-mono flex space-x-4 ">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>

            <FiGithub class="text-white h-7 w-6 mt-6 mb-10 " />
          </span>
        </div>
      </section>
    </>
  );
};

export default Projects;
