import React from "react";
import ProductImage from "../../assets/ProductDetailIamge.png";
import ProductTextBox from "./ProductBox";
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
    flexDirection: "row", // 수평으로 정렬
    alignItems: "center", // 중앙 정렬
    padding: "16px", // 모든 화면 크기에 패딩 적용
  };

  const leftSideStyle = {
    flex: 1, // 왼쪽 이미지가 남은 공간을 모두 차지하도록 설정
  };

  const rightSideStyle = {
    flex: 1, // 오른쪽 내용이 남은 공간을 모두 차지하도록 설정
    marginLeft: "16px", // 왼쪽과 오른쪽 사이 여백 추가
  };

  // 미디어 쿼리를 사용하여 웹 너비에 따라 스타일 조정
  const responsiveStyle = {
    "@media (max-width: 768px)": {
      flexDirection: "column", // 화면이 좁아질 때 세로로 정렬
      alignItems: "center", // 세로 정렬을 위해 중앙 정렬
      padding: "8px", // 좁은 화면에 패딩 조정
      marginLeft: "0", // 좁은 화면에 여백 제거
    },
  };

  return (
    <div style={{ ...containerStyle, ...responsiveStyle }}>
      <div style={leftSideStyle}>
        <img src={ProductImage} alt="" style={{ width: "100%" }} />
      </div>
      <div style={rightSideStyle}>
        <div className="text-box" style={{ width: "100%" }}>
          <ProductTextBox {...productInfo} />
          <div style={{ marginTop: "16px", marginRight: "100px" }}>
            <ProductOption />
          </div>
          <div style={{ marginTop: "16px", marginRight: "100px" }}>
            <ProductPriceGroup />
            <ProductButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
