import React from "react";
import one from "../assets/onedesk1.png";
import sbmo from "../assets/sbmo.png";
import stox from "../assets/stoxticker.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="pt-20 mt-20 lg:mt-32 h-full container mx-auto  px-4 md:px-8 lg:px-12"
      >
        {" "}
        <p class=" text-center mx-auto lg:text-5xl text-4xl tracking-normal font-pop font-bold text-zinc-100 max-w-4xl">
          Things I've Built
        </p>{" "}
        <div className=" mt-16 grid sm:grid-cols-4 lg:grid-cols-3 gap-6 ">
          <div
            style={{
              background: `url(${one})`,
              backgroundRepeat: "no-repeat",
            }}
            className=" sm:col-span-2 lg:col-span-1 bg-cover h-full  w-fit rounded-xl overflow-hidden  "
          >
            <div className=" w-full h-full backdrop-brightness-[.08]  py-1 px-4 ">
              <div className="mt-10">
                <small className="text-cyan-400 text-sm font-mono">
                  Featured Project
                </small>
                <h1 className="text-white text-2xl mt-2 font-semibold ">
                  OneDesk
                </h1>
              </div>

              <h2 className="text-zinc-400 text-base mt-10 ">
                {" "}
                Developed a help desk based on chat functionality for the
                college student and faculties. Due to the covid 19 pandemic,
                students were not able to communicate with the authorities and
                this project helps them to resolve their queries by directly
                connecting with the authorities of their respective departments.
              </h2>
              <div className="w-full inline-block md:mt-10 lg:mt-6">
                <ul className="mt-14 text-sm text-white font-mono  ">
                  <li className="float-left pr-4">Bulma CSS</li>
                  <li className="float-left pr-4">Javascript</li>
                  <li className="float-left pr-4">PHP</li>
                  <li className="float-left pr-4">MySQL</li>
                </ul>
              </div>
              <a
                href="https://github.com/subodhGalande/OneDesk"
                target="_blank"
              >
                <FiGithub class="text-white h-5 w-5 mt-6 mb-10 " />
              </a>
            </div>
          </div>
          <div
            style={{
              background: `url(${stox})`,
              backgroundRepeat: "no-repeat",
            }}
            className=" sm:col-span-2 lg:col-span-1  h-full bg-cover bg-top w-full rounded-xl overflow-hidden  "
          >
            <div className=" backdrop-brightness-[.08] opacity-100 w-full h-full py-1 px-4 ">
              <div className="mt-10">
                <small className="text-cyan-400 text-sm font-mono">
                  Featured Project
                </small>
                <h1 className="text-white text-2xl mt-2 font-semibold ">
                  StoxTicker
                </h1>
              </div>

              <h2 className="text-zinc-400 text-base mt-10 ">
                {" "}
                Developed a cross-platform Stock market app, which efficiently
                displays real-time stocks data and Financial news by consuming
                data from multiple APIs and the user can save his/her favourite
                stock/ticker. This app helps user to analyse the key metrics and
                all the data which is related and helpful to gain a good insight
                about that particular stock.
              </h2>
              <div className="w-full inline-block">
                <ul className="mt-14  text-sm text-white font-mono ">
                  <li className="float-left pr-4 ">React</li>
                  <li className="float-left pr-4 ">Ionic Framework</li>
                  <li className="float-left pr-4 ">Styled Components</li>
                </ul>
              </div>
              <a
                href="https://github.com/subodhGalande/stoxticker"
                target="_blank"
              >
                <FiGithub class="text-white h-5 w-5 mt-6 mb-10  " />
              </a>
            </div>
          </div>
          <div
            style={{
              background: `url(${sbmo})`,
              backgroundRepeat: "no-repeat",
            }}
            className=" sm:col-span-2 lg:col-span-1 sm:col-start-2 h-full bg-cover w-full rounded-xl overflow-hidden "
          >
            <div className=" backdrop-brightness-[.08] w-full h-full py-1 px-4 ">
              <div className="mt-10">
                <small className="text-cyan-400 text-sm font-mono">
                  Featured Project
                </small>
                <h1 className="text-white text-2xl mt-2 font-semibold ">
                  SBM Overseas
                </h1>
              </div>

              <h2 className="text-zinc-400 text-base mt-10 ">
                {" "}
                A freelance project accomplished for a turmeric exporting
                company. Developed a website for them to showcase their products
                to the buyers so that the buyers can take a look at the
                specifications of the products and can directly communicate with
                the company by just filling up a contact us form.
              </h2>
              <div className="w-full inline-block mt-6">
                <ul className="mt-14 text-sm text-white font-mono   ">
                  <li className="float-left pr-4">React</li>
                  <li className="float-left pr-4">Tailwind CSS</li>
                  <li className="float-left pr-4">Vite</li>
                </ul>
              </div>
              <div className=" items-baseline mt-6 mb-10">
                <ul className=" items-baseline ">
                  <li className="float-left pr-4">
                    <a
                      href="https://github.com/subodhGalande/sbmoverseas"
                      target="_blank"
                    >
                      <FiGithub class="text-white h-5 w-5   " />{" "}
                    </a>
                  </li>
                  <li className="float-left pr-4 mb-10">
                    <a href="https://www.sbmoverseas.com" target="_blank">
                      {" "}
                      <FiExternalLink class="text-white h-5 w-5  " />
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
