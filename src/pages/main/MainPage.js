import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "./MainBanner";
import MainFirstText from "./MainFirstText";
import MainAboutGroup from "./MainAboutGroup";
import MainSelectGroup from "./MainSelectGroup";
import Component4 from "./Component4";
import Component5 from "./Component5";
import FloatingButton from "../../components/demo/FloatingButton";
import DemoModal from "../../components/demo/DemoModal";
import InitialDemo from "../../components/demo/InitialDemo";
import CompleteDemo from "../../components/demo/CompleteDemo";

export default function MainPage() {
  return (
    <div>
      <Header />
      <div style={{marginBottom: "180px" }}>
        <MainBanner />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <MainFirstText />
      </div>
      <div style={{ marginBottom: "40px", marginLeft: "40px", marginRight: "40px" }}>
        <MainAboutGroup />
      </div>
      <div style={{ marginBottom: "40px", marginLeft: "40px", marginRight: "40px" }}>
        <MainSelectGroup />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Component4 />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Component5 />
      </div>
      {/* <InitialDemo /> */}
      {/* <DemoModal /> */}
      {/* <CompleteDemo /> */}
      <FloatingButton />
      <Footer />
    </div>
  );
}
