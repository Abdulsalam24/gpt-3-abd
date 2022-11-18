import google from "../asset/img/google.svg";
import slack from "../asset/img/slack.svg";
import dropbox from "../asset/img/dropbox.svg";
import atlassian from "../asset/img/atlassian.svg";
import shopify from "../asset/img/shopify.svg";

const Logo = () => {
  return (
    <div>
      <div className="py-14 flex flex-wrap justify-center gap-10 container-div">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Logo;
