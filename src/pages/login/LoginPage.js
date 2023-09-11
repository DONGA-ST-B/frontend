import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LoginTextBoxComponent from "./LoginTextBox";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import SocialGroup from "./SocialGroup";

export default function ProductDetailPage() {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "40px" }}>
                <LoginTextBoxComponent />
            </div>
            <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <LoginInput />
            </div>
            <LoginButton />
            <SocialGroup />
            <Footer />
        </div>
    );
}