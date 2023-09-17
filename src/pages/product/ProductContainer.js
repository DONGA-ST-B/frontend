
import React, { useState, useEffect } from "react";
import ProductTextBox from "./ProductBox";
import ProductOption from "./ProductOption";
import ProductPriceGroup from "./ProductPriceGroup";
import ProductButtonGroup from "./ProductButtonGroup";
import FetchProductInfo from "./FetchProductInfo"; 

const ProductContainer = ({ productId }) => {
  const [productInfo, setProductInfo] = useState(null);
  const [selectedOptionPrice, setSelectedOptionPrice] = useState(0);

  useEffect(() => {
    const getProductInfo = async () => {
      const data = await FetchProductInfo(productId);
      if (data) {
        setProductInfo(data);
      }
    };

    getProductInfo();
  }, [productId]);

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "16px",
  };

  const handlePriceIncrease = (amount) => {
    setSelectedOptionPrice(selectedOptionPrice + amount);
  };

  const leftSideStyle = {
    flex: 1, 
  };

  const rightSideStyle = {
    flex: 1, 
    marginLeft: "16px", 
  };

  const responsiveStyle = {
    "@media (max-width: 768px)": {
      flexDirection: "column", 
      alignItems: "center", 
      padding: "8px",
      marginLeft: "0", 
    },
  };

  return (
    <div style={{ ...containerStyle, ...responsiveStyle }}>
      <div style={leftSideStyle}>
        <img src={productInfo.photoUrl} alt="" style={{ width: "100%" }} />

      </div>
      <div style={rightSideStyle}>
        <div className="text-box" style={{ width: "100%" }}>
          <ProductTextBox {...productInfo} />
          <div style={{ marginTop: "16px", marginRight: "100px" }}>
            <ProductOption onPriceIncrease={handlePriceIncrease} />
          </div>
          <div style={{ marginTop: "16px", marginRight: "100px" }}>
            <ProductPriceGroup selectedOptionPrice={selectedOptionPrice} />
            <ProductButtonGroup productId={productId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
