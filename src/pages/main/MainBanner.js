import React from "react";
import { COLORS } from "../../styles/colors";
import BannerVideo from "../../assets/BannerVideo.mp4";

const bannerStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "1920px",
  height: 0,
  paddingTop: "56.25%",
  overflow: "hidden",
  background: COLORS.GRAY_400,
};

const videoStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const textContainerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  width: "100%",

  color: "var(--gray-900, #15191D)",
  textAlign: "center",
  fontFamily: "Pretendard",
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: "700",
};

const textStyle = {
  fontSize: "64px",
  fontWeight: "bold",
  color: COLORS.GRAY_900,
  whiteSpace: "nowrap",
};

const responsiveTextStyle = {
  fontSize: "48px",
};

const MainBanner = () => {
  return (
    <div style={bannerStyle}>
      <video autoPlay muted loop style={videoStyle}>
        <source src={BannerVideo} type="video/mp4" />
      </video>
      <div style={textContainerStyle}>
        <p style={{ ...textStyle, ...responsiveTextStyle }}>
          하이카디가 24시간 환자의 곁을 지켜드려요
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
