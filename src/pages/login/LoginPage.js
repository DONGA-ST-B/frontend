import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoginTextBoxComponent from "./LoginTextBox";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import SocialGroup from "./SocialGroup";
import LoginBottom from "./LoginBottom";

export default function LoginPage() {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "100vh" }}>
        <div style={{ marginTop: "100px" }}>
          <LoginTextBoxComponent />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <LoginInput />
        </div>
        <div style={{ marginBottom: "40px" }}>
          <LoginButton />
        </div>
        <div style={{ marginBottom: "40px" }}>
          <SocialGroup />
        </div>
        <div style={{ marginBottom: "100px" }}>
          <LoginBottom />
        </div>
      </div>

      <Footer />
    </div>
  );
}
