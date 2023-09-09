import React from "react";
import ProductImage from "../../assets/ProductDetailIamge.png";
import ProductTextBox from "./ProductTextBox";

const ContainerComponent = () => {
    const productInfo = {
        productName: "제품명",
        productNameEnglish: "Product Name",
        description: "설명설명설명",
        price: "가격",
    };

    return (
        <div className="container">
            <div className="left-side">
                <img src={ProductImage} alt="" width="800" height="800" />
            </div>
            <div className="right-side">
                <div className="text-box">
                    <ProductTextBox {...productInfo} />
                </div>
            </div>
        </div>
    );
};

export default ContainerComponent;
