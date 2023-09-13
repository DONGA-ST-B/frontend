import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "./MainBanner";
import MainFirstText from "./MainFirstText";


export default function MainPage() {
    return (
        <div>
            <Header />
            <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <MainBanner />
            </div>
            <div style={{ marginBottom: "40px" }}>
                <MainFirstText />
            </div>
            <div style={{ marginBottom: "40px" }}>
            {/* 컴포넌트 3 */}
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