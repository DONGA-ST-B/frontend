import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import WishItem from "./WishItem";
import WishPrice from "./WishPrice";
import WishTitle from "./WishTitle";
import WishSideMenu from "./WishSideMenu";
import SecondHeader from "../../components/header/SecondHeader";
import styled from "styled-components";

export default function WishListPage() {
  return (
    <div>
      <SecondHeader />
      <WishTitle />
      <div style={{ display: "flex" }}>
        <div
          style={{ flex: "30%", marginLeft: "100px", marginBottom: "160px" }}
        >
          <WishSideMenu />
        </div>

        <CartBox>
          <WishItem />
          {/* <WishPrice /> */}
        </CartBox>
      </div>
      <Footer />
    </div>
  );
}

const CartBox = styled.div`
  flex: 100%;
  justify-content: center;
  margin-left: 160px;
  margin-bottom: 150px;
`;
