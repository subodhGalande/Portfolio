import React from "react";

const Work = () => {
  return (
    <>
      <div
        id="work"
        className=" pt-20 mx-auto text-center h-full mt-20 lg:mt-32 w-11/12 max-w-7xl lg:w-5/6 px-4 md:px-8 lg:px-12"
      >
        <h1 class=" mx-auto lg:text-5xl text-4xl tracking-normal font-pop font-bold text-zinc-100 max-w-4xl">
          Where I've worked
        </h1>

        <div class="mx-auto lg:w-5/6 ">
          <ol class="relative z-10 border-l lg:w-5/6 mt-10 lg:mt-16 border-zinc-500/40">
            <li class="mb-10 ml-4">
              <div class="absolute w-4 h-4 bg-cyan-400 rounded-full mt-1.5 -left-2 "></div>
              <h2 className=" text-xl lg:text-2xl ml-4 text-left font-bold text-slate-300 ">
                Software Engineer
                <span class="text-cyan-400"> @ Capgemini</span>
              </h2>
              <p class="text-base lg:text-lg mt-2 ml-4 text-left font-mono text-slate-300">
                December 2022 - Currently Working
              </p>
              <ul class="text-sm lg:text-lg ml-8 mt-6 text-left space-y-3 list-disc list-item text-slate-400">
                <li>
                  {" "}
                  Writing clean, maintainable, and efficient code in JavaScript
                  and React.
                </li>
                <li>
                  Collaborating with other team members, such as designers and
                  backend developers, to implement features.
                </li>
                <li>Debugging and fixing issues in the codebase</li>
                and integrating with RESTful APIs or other data sources.
                <li>
                  Using version control systems like Git for code management.
                </li>
                <li>
                  Participating in code reviews to maintain code quality and
                  adhering to company coding standards and practices.
                </li>
              </ul>
            </li>
            <li class="mb-10 ml-4">
              <div class="absolute w-4 h-4 bg-cyan-400 rounded-full mt-1.5 -left-2 "></div>
              <h2 className=" text-xl lg:text-2xl ml-4 text-left font-bold text-slate-300 ">
                Java Trainee Intern
                <span class="text-cyan-400"> @ Amstech Inc.</span>
              </h2>
              <p class="text-base lg:text-lg mt-2 ml-4 text-left font-mono text-slate-300">
                October - October 2019
              </p>
              <ul class="text-sm lg:text-lg ml-8 mt-6 text-left space-y-3 list-disc list-item text-slate-400">
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
              <ul class="text-sm  lg:text-lg ml-8 mt-6 text-left space-y-3 list-disc list-item text-slate-400">
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
