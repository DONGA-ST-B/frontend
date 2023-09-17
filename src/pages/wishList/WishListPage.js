import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WishItem from "./WishItem";
import WishPrice from "./WishPrice";
import WishSideMenu from "./WishSideMenu";

export default function WishListPage() {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <div style={{ flex: "30%", marginLeft: "100px", marginTop: "160px", marginBottom: "160px" }}>
                    <WishSideMenu />
                </div>

                <div style={{ flex: "70%", marginLeft: "160px", marginTop: "160px" }}>
                    <WishItem />
                    <WishPrice />
                </div>
            </div>
            <Footer />
        </div>
    );
}
