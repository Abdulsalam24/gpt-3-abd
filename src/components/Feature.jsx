import bar from "../asset/img/info-bar.svg";

const Feature = () => {
  const feature = [
    {
      heading: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded. ",
    },
    {
      heading: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      heading: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      heading: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];

  return (
    <div className="container-div feature pt-20">
      <div className="flex flex-col gap-16 justify-between lg:flex-row items-start">
        <div className="flex flex-col gap-9 lg:w-[40%]">
          <h3>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h3>
          <p className="text-orangeLight">
            Request Early Access to Get Started
          </p>
        </div>

        <div className="flex justify-between flex-wrap gap-[57px] lg:flex-col lg:w-[50%]">
          {feature.map((feat, i) => (
            <div
              className="flex flex-col gap-5 justify-between sm:max-w-[460px] md:max-w-[325px] lg:flex-1 lg:max-w-full lg:flex-row"
              key={i}
            >
              <div className="lg:w-[25%]">
                <img className=" mb-[4px]" src={bar} alt="bar" />
                <p className="text-white leading-6 text-lg font-extrabold">
                  {feat.heading}
                </p>
              </div>
              <p className="text-sm leading-7 lg:w-[50%]">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
