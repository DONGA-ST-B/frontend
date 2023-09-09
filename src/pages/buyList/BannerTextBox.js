import React from "react";

const BannerTextBox = () => {
  const textBoxStyle = {
    fontSize: "48px",
    color: "black",
    textAlign: "left",
    lineHeight: "1.2",
    marginBottom: "24px", 
    fontWeight: "bold",

  };

  const secondLineStyle = {
    fontSize: "24px", 
    textAlign: "left",
    whiteSpace: "pre-line", 
  };

  return (
    <div>
      <div style={textBoxStyle}>
        HiCardi+
      </div>
      <div style={secondLineStyle}>
        스마트한 병원을 위한 솔루션
        <br />
        Hicardi+ 제품을 만나보세요.
      </div>
    </div>
  );
};

export default BannerTextBox;
