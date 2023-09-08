import React from "react";
import BuyBannerImage from "../../assets/BuyBannerBG.png";
import BannerImage from "../../assets/BannerImage.png";
import BannerTextBox from "./BannerTextBox"; 

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

  const textBoxStyle = {
    position: "absolute",
    top: "120px", // 위 여백 120px
    left: "80px", // 왼쪽 여백 80px
    textAlign: "left", // 왼쪽 정렬 설정
  };
  

  return (
    <div style={bannerStyle}>
      <div style={backgroundStyle}></div>
      <img src={BuyBannerImage} alt="Overlay" style={overlayImageStyle} />
      <div style={textBoxStyle}>
        <BannerTextBox />
      </div>
    </div>
  );
};

export default BuyBanner;
