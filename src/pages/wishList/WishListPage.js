import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WishItem from "./WishItem";


export default function WishListPage() {
    return (
      <div>
        <Header />
        <div>
            <WishItem />
        </div>
        <Footer />
      </div>
    );
}