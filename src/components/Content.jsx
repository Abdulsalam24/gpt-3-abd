import React from "react";

import featureImg from "../asset/img/featureImg.svg";

const Content = () => {
  return (
    <div className="content container-div flex flex-col gap-10 lg:items-center justify-between lg:flex-row lg:gap-0">
      <div className="flex justify-center lg:block lg:w-[45%]">
        <img src={featureImg} alt="featureImg" />
      </div>
      <div className="max-w-2xl lg:max-w-xl lg:w-[55%]">
        <p className="text-blueLight2 text-lg">
          Request Early Access to Get Started
        </p>
        <h3 className="mt-3 mb-6">The possibilities are beyond your imagination</h3>
        <p className="mt-6 mb-8">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-orangeLight">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Content;
