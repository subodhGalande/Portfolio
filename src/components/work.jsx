import React from "react";

const Work = () => {
  return (
    <>
      <div className=" mx-auto text-center h-full mt-20 lg:mt-32 w-11/12 lg:w-5/6 z-10 px-4 md:px-8 lg:px-12">
        <h1 class=" mx-auto lg:text-5xl text-4xl tracking-normal font-pop font-bold text-zinc-100 max-w-4xl">
          Where I've worked
        </h1>

        <div class="mx-auto lg:w-5/6 ">
          <ol class="relative z-10 border-l lg:w-5/6 mt-10 lg:mt-16 border-zinc-500/40">
            <li class="mb-10 ml-4">
              <div class="absolute w-4 h-4 bg-cyan-400 rounded-full mt-1.5 -left-2 "></div>
              <h2 className=" text-xl lg:text-2xl ml-4 text-left font-bold text-slate-300 ">
                Java Trainee Intern
                <span class="text-cyan-400"> @ Amstech Inc.</span>
              </h2>
              <p class="text-base lg:text-lg mt-2 ml-4 text-left font-mono text-slate-300">
                October - October 2019
              </p>
              <ul class="text-base lg:text-lg ml-8 mt-6 text-left space-y-3 list-disc list-item text-slate-400">
                <li>
                  {" "}
                  Learned Java fundamentals under "Amstech Academic Development
                  Program" on Java Technology.
                </li>
                <li>
                  Got exposure of corporate ethics and development experience.
                </li>
              </ul>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-4 h-4 bg-cyan-400 rounded-full mt-1.5 -left-2 "></div>
              <h2 className=" text-xl lg:text-2xl ml-4 text-left font-bold text-slate-300 ">
                Visual Content Development Intern
                <span class="text-cyan-400"> @ Neuratech Innovations.</span>
              </h2>
              <p class="text-base lg:text-lg mt-2 ml-4 text-left font-mono text-slate-300">
                May - August 2018
              </p>
              <ul class="text-base  lg:text-lg ml-8 mt-6 text-left space-y-3 list-disc list-item text-slate-400">
                <li>
                  {" "}
                  Worked with Product Development Team as a Graphic Designer and
                  Motion Graphics Creator.
                </li>
                <li>
                  Worked on tools like Adobe Illustrator, Adobe Photoshop and
                  Adobe After Effects to create stunning graphic and motion
                  graphic designs.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Work;
