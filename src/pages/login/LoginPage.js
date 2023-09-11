import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoginTextBox from "./LoginTextBox";
import LoginTextBoxComponent from "./LoginTextBox";

export default function ProductDetailPage() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: "40px" }}>
            <LoginTextBoxComponent />
        </div>
        <Footer />
      </div>
    );
  }