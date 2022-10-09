import React from "react";
import { ReactDOM } from "react";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiIonic } from "react-icons/di";
import {
  SiBulma,
  SiGithub,
  SiNetlify,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";

const Tech = () => {
  return (
    <>
      <section class=" mx-auto text-center h-full mt-32 lg:mt-20 w-11/12 lg:w-5/6">
        <div className="h-fit">
          <p class=" mx-auto lg:text-5xl text-4xl tracking-normal font-pop font-bold text-zinc-100 max-w-4xl">
            Technologies & Tools
          </p>

          <div class="grid mx-auto mt-12  md:grid-cols-2 max-w-5xl justify-items-center sm:space-y-0 space-y-8 ">
            <div class="px-7 ring-1 ring-zinc-500/40 sm:w-5/6  shadow-md  rounded-lg bg-zinc-800">
              <div class=" w-full pb-4 border-b-[1px] border-zinc-500/40">
                <h1 class="font-pop mt-10 text-2xl text-cyan-400 font-medium">
                  Tech Stack
                </h1>
                <p class="text-base mt-5 font-pop text-zinc-300 ">
                  {" "}
                  Technologies I use to develop frontend and mobile app.{" "}
                </p>
              </div>

              <ul class="mt-8 mb-8 text-center text-base font-medium font-pop text-white space-y-2  align-center  divide-zinc-100/5">
                <li class=" pt-3 pb-2 ">
                  {" "}
                  <DiHtml5 class="text-cyan-400 inline-block mx-1 h-6 w-6  " />{" "}
                  <p class="inline-block">HTML5</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <DiCss3 class="text-cyan-400 inline-block mx-1 h-6 w-6 " />{" "}
                  <p class="inline-block">CSS3</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiJavascript class="text-cyan-400 inline-block mx-2  h-5 w-5 " />
                  <p class="inline-block">Javascript</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <DiReact class="text-cyan-400 inline-block  h-6 w-6 mx-2" />
                  <p class="inline-block">React JS</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <DiIonic class="text-cyan-400 inline-block mx-1   h-8 w-8 " />
                  <p class="inline-block">Ionic Framework</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiTailwindcss class="text-cyan-400 inline-block  h-6 w-6 mx-2" />
                  <p class="inline-block">Tailwind CSS</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiBulma class=" text-cyan-400 inline-block  h-6 w-6 mx-2 " />
                  <p class="inline-block">Bulma Framework</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <DiPhp class="text-cyan-400 inline-block mx-1  h-7 w-7 " />
                  <p class="inline-block">PHP</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <DiMysql class="text-cyan-400 inline-block mx-2 h-6 w-6 " />
                  <p class="inline-block">MySQL</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <DiGit class="text-cyan-400 inline-block mx-1 h-7 w-7 " />
                  <p class="inline-block">Git</p>
                </li>
              </ul>
            </div>
            <div class="px-7 ring-1 ring-zinc-500/40 sm:w-5/6  shadow-md  rounded-lg bg-zinc-800">
              <div class=" pb-4 border-b-[1px] border-zinc-500/40">
                <h1 class="font-pop mt-10 text-2xl text-cyan-400 font-medium">
                  Tools
                </h1>
                <p class="text-base mt-5 font-pop text-zinc-300 ">
                  {" "}
                  Tools which I use for web development and designing.
                </p>
              </div>

              <ul class="mt-8 mb-8 text-center text-base font-medium font-pop text-white space-y-2  align-center  divide-zinc-100/5">
                <li class=" pt-3 pb-2 ">
                  {" "}
                  <SiAdobeillustrator class="text-cyan-400 inline-block mx-1 h-5 w-5  " />{" "}
                  <p class="inline-block">Adobe Illustrator</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiAdobephotoshop class="text-cyan-400 inline-block mx-1 h-5 w-5 " />{" "}
                  <p class="inline-block">Adobe Photoshop</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiAdobeindesign class="text-cyan-400 inline-block mx-2  h-5 w-5 " />
                  <p class="inline-block">Adobe Indesign</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiAdobexd class="text-cyan-400 inline-block  h-5 w-5 mx-2" />
                  <p class="inline-block">Adobe XD</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiAdobeaftereffects class="text-cyan-400 inline-block mx-2   h-5 w-5 " />
                  <p class="inline-block">Adobe AfterEffects</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiGithub class="text-cyan-400 inline-block  h-5 w-5 mx-2" />
                  <p class="inline-block"> GitHub </p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiVisualstudiocode class=" text-cyan-400 inline-block  h-5 w-5 mx-2 " />
                  <p class="inline-block">Vs Code</p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiNetlify class="text-cyan-400 inline-block mx-2  h-5 w-5 " />
                  <p class="inline-block"> Netlify </p>
                </li>
                <li class=" pt-3 pb-2 ">
                  <SiVite class="text-cyan-400 inline-block mx-2 h-5 w-5 " />
                  <p class="inline-block">Vite</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
