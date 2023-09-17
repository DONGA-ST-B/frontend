import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GoogleLogin from "../wishList/WishItem";

export default function GoogleLoginPage() {
    return (
        <div>
          <Header />
          <div>
            <GoogleLogin />
          </div>
          <Footer />
        </div>
      );
  }