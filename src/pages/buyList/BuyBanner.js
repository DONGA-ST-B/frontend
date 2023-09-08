import React from "react";
import BuyBannerImage from "../../assets/BuyBannerBG.png";
import BannerImage from "../../assets/BannerImage.png";

const BuyBanner = () => {
  const bannerStyle = {
    height: "350px",
    margin: "20px 50px", 
    borderRadius: "40px",
    overflow: "hidden",
    position: "relative", 
  };

  const overlayImageStyle = {
    position: "absolute", 
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const backgroundStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={bannerStyle}>
      <div style={backgroundStyle}></div>
      <img
        src={BuyBannerImage}
        alt="Overlay"
        style={overlayImageStyle}
      />
    </div>
  );
};

export default BuyBanner;
