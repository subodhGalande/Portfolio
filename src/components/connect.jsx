import React from "react";

const Connect = () => {
  return (
    <>
      <section
        id="connect"
        class=" py-20 mx-auto text-center h-full mt-20 lg:mt-32 w-11/12 lg:w-5/6"
      >
        <h1 className="mx-auto lg:text-5xl text-4xl tracking-normal font-pop font-bold text-zinc-100 max-w-4xl mt-20">
          Let's Connect
        </h1>

        <p className="text-base lg:text-lg p-6 text-slate-400 max-w-2xl mx-auto">
          Hello! Thank you for your interest in my profile. I am an ambitious
          individual who is looking for new opportunities. I would love to hear
          from you if you're interested in working together.
        </p>

        <button className="font-medium mt-10 text-white py-3 px-4 border-2 border-white hover:bg-zinc-200/20 transition-all ease-in duration-75 rounded-lg">
          {" "}
          <a href="mailto:subodh.dev@outlook.com">Say Hello</a>
        </button>
      </section>
    </>
  );
};

export default Connect;
