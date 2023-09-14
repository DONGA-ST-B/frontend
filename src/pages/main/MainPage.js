import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "./MainBanner";
import MainFirstText from "./MainFirstText";
import MainAboutGroup from "./MainAboutGroup";
import MainSelectGroup from "./MainSelectGroup";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Slider from "./Temp";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "40px", marginBottom: "180px" }}>
        <MainBanner />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <MainFirstText />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <MainAboutGroup />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <MainSelectGroup />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Component4 />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Component5 />
      </div>
      <Footer />
    </div>
  );
}
