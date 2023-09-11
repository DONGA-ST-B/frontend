import React from "react";
import ProductImage from "../../assets/ProductDetailIamge.png";
import ProductTextBox from "./ProductTextBox";
import ProductOption from "./ProductOption";

const ContainerComponent = () => {
  const productInfo = {
    productName: "제품명",
    productNameEnglish: "Product Name",
    description: "설명설명설명",
    price: "가격",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "0 200px",
  };

  const leftSideStyle = {
    flex: 1,
  };

  const rightSideStyle = {
    flex: 2,
  };

  return (
    <div style={containerStyle}>
      <div style={leftSideStyle}>
        <img src={ProductImage} alt="" width="800" height="800" />
      </div>
      <div style={rightSideStyle}>
        <div className="text-box">
          <ProductTextBox {...productInfo} />
          <div style={{ marginTop: "16px" }}>
            <ProductOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerComponent;