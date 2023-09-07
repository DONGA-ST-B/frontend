import React from "react";
import BuyBannerImage from "../../assets/BuyBanner.png";

const BuyBanner = () => {
  const bannerStyle = {
    height: "350px",
    margin: "20px 50px", // 위 아래 여백 20px, 양 옆 여백 50px
    borderRadius: "40px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 이미지가 컨테이너에 맞게 조정되도록 함
  };

  return (
    <div style={bannerStyle}>
      <img
        src={BuyBannerImage} // 배너 이미지 리소스 경로
        alt="Banner"
        style={imageStyle}
      />
    </div>
  );
};

export default BuyBanner;
