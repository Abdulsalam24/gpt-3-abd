import React from "react";

import illustration from "../asset/img/header-illustration.svg";
import blur1 from "../asset/img/blur1.svg";
import blur2 from "../asset/img/blur2.svg";
import groupImg from "../asset/img/group-img.svg";

const Header = () => {
  return (
    <header className="relative container-div">
      <img
        className="blur-img w-[1000px] h-[1000px] left-[-336px] top-[-305px] "
        src={blur1}
        alt="blur1"
      />

      <div className="flex flex-col justify-between gap-10 lg:flex-row mx-auto lg:items-center lg:gap-0">
        <div className="text max-w-2xl lg:max-w-full lg:w-[54%]">
          <h1 className="leading-[75px] text-[56px] lg:text-[64px]">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="my-8 max-w-[540px]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="input flex items-center">
            <input
              className="bg-bluish border-none rounded-t-md rounded-l-md py-4 px-4 w-[60%] sm:w-[75%] md:w-[65%] md:py-6 md:px-6"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="bg-orange hover:bg-orangeLight text-white py-4 px-4 border-none rounded-r-md w-[40%] sm:w-[24%] md:py-6">
              Get Started
            </button>
          </div>

          <div className="img my-9 flex flex-col items-center gap-5 sm:flex-row">
            <img className="w-40" src={groupImg} alt="" />
            <p className="text-xs text-white">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>

        </div>
        <div className="img text-center w-full flex justify-center lg:w-[46%]">
          <img src={illustration} alt="illustration" />
        </div>
      </div>

      <img
        className="blur-img w-[700px] h-[500px] right-[-100px] bottom-[-150px]"
        src={blur2}
        alt="blur1"
      />
    </header>
  );
};

export default Header;
