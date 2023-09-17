import React from "react";
import Header from "../components/header/Header";
import FloatingButton from "../components/demo/FloatingButton";
import Footer from "../components/footer/Footer";
import DetailBoard from "./DetailBoard";

export default function BoardPage() {
  return (
    <div>
      <Header />
      <DetailBoard />
      <FloatingButton />
      <Footer />
    </div>
  );
}
