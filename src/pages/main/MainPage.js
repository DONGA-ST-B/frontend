import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "./MainBanner";
import MainFirstText from "./MainFirstText";
import MainAboutItem from "./MainAboutItem";
import MainAboutGroup from "./MainAboutGroup";


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
            {/* 컴포넌트 4 */}
            </div>
            <div style={{ marginBottom: "40px" }}>
            {/* 컴포넌트 5 */}
            </div>
            <Footer />
        </div>
    );
}