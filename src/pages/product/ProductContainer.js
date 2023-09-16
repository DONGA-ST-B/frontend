
import React, { useState, useEffect } from "react";
import ProductImage from "../../assets/ProductDetailIamge.png";
import ProductTextBox from "./ProductBox";
import ProductOption from "./ProductOption";
import ProductPriceGroup from "./ProductPriceGroup";
import ProductButtonGroup from "./ProductButtonGroup";
import FetchProductInfo from "./FetchProductInfo"; // API 호출 함수 가져오기

const ProductContainer = ({ productId }) => {
  const [productInfo, setProductInfo] = useState(null);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(0);

  // productId가 변경될 때마다 API 호출
  useEffect(() => {
    const getProductInfo = async () => {
      const data = await FetchProductInfo(productId);
      if (data) {
        setProductInfo(data);
      }
    };

    getProductInfo();
  }, [productId]);

  // productInfo가 로드되지 않은 경우 로딩 상태를 표시
  if (!productInfo) {
    return <div>Loading...</div>;
  }

  // ProductBox 컴포넌트에 필요한 정보 추출
  const { productName, productNameEnglish, description, price } = productInfo;


  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "16px",
  };

  const handlePriceIncrease = (amount) => {
    setSelectedOptionPrice(selectedOptionPrice + amount); // 선택한 옵션의 가격을 더해 총 상품 금액을 업데이트
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
        <ProductOption onPriceIncrease={handlePriceIncrease} />
      </div>
          <div style={{ marginTop: "16px", marginRight: "100px" }}>
            <ProductPriceGroup selectedOptionPrice={selectedOptionPrice} />
            <ProductButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
