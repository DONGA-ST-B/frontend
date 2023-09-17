import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WishItem from "./WishItem";
import WishPrice from "./WishPrice";


export default function WishListPage() {
    return (
      <div>
        <Header />
        <div>
            <WishItem />
            <WishPrice />
        </div>
        <Footer />
      </div>
    );
}