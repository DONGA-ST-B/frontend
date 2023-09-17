import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "../main/MainBanner";
import MainFirstText from "../main/MainFirstText";
import MainAboutGroup from "../main/MainAboutGroup";
import MainSelectGroup from "../main/MainSelectGroup";
import Component4 from "../main/Component4";
import Component5 from "../main/Component5";
import FloatingButton from "../../components/demo/FloatingButton";
import DemoModal from "../../components/demo/DemoModal";
import InitialDemo from "../../components/demo/InitialDemo";
import CompleteDemo from "../../components/demo/CompleteDemo";
import SecondHeader from "../../components/header/SecondHeader";

export default function MyPage() {
  return (
    <div>
      <SecondHeader />
      <div style={{ marginBottom: "180px" }}>
        <MainBanner />
      </div>
      <div style={{ marginBottom: "40px" }}>
        <MainFirstText />
      </div>
      <div
        // className={isVisible ? "fade-in-out" : ""}
        style={{
          marginBottom: "40px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <MainAboutGroup />
      </div>
      <div
        style={{
          marginBottom: "40px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
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
