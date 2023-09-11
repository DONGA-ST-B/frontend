import React from "react";
import ProductImage from "../../assets/ProductDetailIamge.png";
import ProductTextBox from "./ProductTextBox";
import ProductOption from "./ProductOption";
import ProductPriceGroup from "./ProductPriceGroup";
import ProductButtonGroup from "./ProductButtonGroup";

const ProductContainer = () => {
  const productInfo = {
    productName: "제품명",
    productNameEnglish: "Product Name",
    description: "설명설명설명",
    price: "가격",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row", // 가로 방향으로 정렬
    justifyContent: "center", // 가로 방향으로 가운데 정렬
    alignItems: "center", // 수직 가운데 정렬
    height: "100vh", // 화면 전체 높이 차지
    padding: "16px 200px", // 위 아래 여백을 16px로, 좌우 여백을 200px로 설정
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
          <div style={{ marginTop: "16px" }}>
            <ProductPriceGroup />
            <ProductButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
