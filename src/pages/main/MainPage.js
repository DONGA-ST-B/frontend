import React, { useEffect, useState } from "react";
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

import "./Main.css";

export default function MainPage() {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // 스크롤 위치를 확인하고, 특정 지점에 도달하면 isVisible 상태를 변경
  //     const scrollY = window.scrollY || document.documentElement.scrollTop;
  //     const triggerPoint = 200; // 원하는 스크롤 위치에서 나타나게 조절
  //     setIsVisible(scrollY > triggerPoint);
  //   };

  //   // 스크롤 이벤트 리스너 등록
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      <Header />
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
