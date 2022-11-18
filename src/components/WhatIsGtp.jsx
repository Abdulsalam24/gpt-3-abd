import React from "react";
import bar from "../asset/img/info-bar.svg";

const WhatIsGtp = () => {
  const gtpInfos = [
    {
      heading: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      heading: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      heading: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  return (
    <div className="container-div gtp-div py-16 px-5 lg:py-[74px] lg:px-[52px]">
      <div className="flex flex-col justify-between gap-16 lg:gap-[91px]">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-36">
          <div className=" lg:w-[74%]">
            <img className="bar" src={bar} alt="bar" />
            <h4>What is GPT-3</h4>
          </div>
          <div>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-[50%]">
            <h3>The possibilities are beyond your imagination</h3>
          </div>
          <div>
            <p className="text-orangeLight">Explore The Library</p>
          </div>
        </div>

        <div className="info flex justify-between flex-wrap gap-[90px]">
          {gtpInfos.map((info, i) => (
            <div
              className="sm:max-w-[460px] md:max-w-[325px] lg:flex-1 lg:max-w-full"
              key={i}
            >
              <img className="bar" src={bar} alt="bar" />
              <h4 className="mb-3 lg:mb-6">{info.heading}</h4>
              <p className="leading-[30px]">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsGtp;
