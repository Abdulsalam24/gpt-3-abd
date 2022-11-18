import bar from "../asset/img/info-bar.svg";
import blur3 from "../asset/img/blur3.svg";
import blur4 from "../asset/img/blur4.svg";

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
    <div className="container-div overflow-hidden relative gtp-div py-16 px-5 lg:py-[74px] lg:px-[52px]">
      <img
        className="absolute -z-10 bg-blueDeep blur-[100px] w-[623px] h-[558px] left-[-500px] top-[-500px] "
        src={blur3}
        alt="blur1"
      />

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

        <div className="info flex justify-between flex-wrap gap-[50px]">
          {gtpInfos.map((info, i) => (
            <div
              className="sm:max-w-[460px] md:max-w-[325px] lg:flex-1 lg:max-w-full"
              key={i}
            >
              <img className="bar" src={bar} alt="bar" />
              <h4 className="mb-3 lg:mb-6">{info.heading}</h4>
              <p className="leading-[30px] font-medium">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
      <img
        className="absolute -z-10 bg-blueDeep blur-[100px] w-[623px] h-[558px] right-[-400px] bottom-[-400px] "
        src={blur4}
        alt="blur2"
      />
    </div>
  );
};

export default WhatIsGtp;
