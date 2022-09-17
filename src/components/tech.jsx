import React from "react";
import { ReactDOM } from "react";
import { DiHtml5 } from "react-icons/di";

const Tech = () => {
  return (
    <>
      <section class="container border mx-auto h-full text-center lg:h-screen mt-24 lg:mt-0 w-11/12 lg:w-5/6">
        <div>
          <h1 class=" mt-10  border mx-auto lg:text-7xl md:text-5xl text-4xl tracking-normal font-pop font-bold text-white max-w-3xl">
            Technologies & Tools
          </h1>

          <div class="grid mt-20 grid-rows-3 space-y-4 justify-center ">
            <div class="px-7 ring-1 ring-zinc-500/40  shadow-md  rounded-lg bg-zinc-800">
              <h1 class="font-pop mt-10 mx-2 text-2xl text-white font-bold">
                Tech Stack
              </h1>
              <p class="text-base mt-1 font-pop text-zinc-300 ">
                {" "}
                Technologies I use to develop frontend and mobile app.{" "}
              </p>

              <ul class="mt-8 mb-8 text-center text-base font-pop text-white space-y-2 divide-y align-center  divide-zinc-100/5">
                <li class=" pt-3 pb-2 ">
                  {" "}
                  <DiHtml5 class="text-cyan-400 inline-block   " />{" "}
                  <p class="inline-block">HTML</p>
                </li>
                <li class="py-2">
                  <DiHtml5 class="text-cyan-400 inline-block   " />{" "}
                  <p class="inline-block">CSS3</p>
                </li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Ionic Framework</li>
                <li>Tailwind CSS</li>
                <li>Bulma Framework</li>
                <li>PHP</li>
                <li>MySQL</li>
                <li>Git</li>
              </ul>
            </div>
            {/* <div class=" px-7 ring-1 ring-zinc-500/40  shadow-md text-base rounded-lg bg-zinc-800">
              hello
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
