import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
import MinusButton from "../../assets/MinusButton.png"
import PlusButton from "../../assets/PlusButton.png"

const WishItem = () => {
    const [quantity, setQuantity] = useState(1); // quantity 상태와 setQuantity 함수를 정의

    const wishItemStyle = {
        display: "flex",
        alignItems: "center",
        marginBottom: "24px", // 텍스트 박스 밑 여백
    };

    const imageStyle = {
        width: "110px",
        height: "110px",
        marginRight: "40px", // 이미지와 텍스트 박스 사이 여백
    };

    const textBoxStyle = {
        flex: 1, // 텍스트 박스가 남은 공간을 차지하도록 설정
    };


    const iconGroupStyle = {
        display: "flex",
        alignItems: "left",
    };

    const iconStyle = {
        width: "32px",
        height: "32px",
        color: COLORS.BLACK,
        cursor: "pointer",
        margin: "8px",
    };

    const productNameStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        color: COLORS.GRAY_900,
    };

    const optionNameStyle = {
        fontSize: "16px",
        color: COLORS.GRAY_500,
    };

    const quantityStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        color: COLORS.BLACK,
      };
    

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div style={wishItemStyle}>
            <img
                style={imageStyle}
                src="이미지 URL" // 실제 이미지 URL로 대체
                alt="Product"
            />
            <div style={textBoxStyle}>
                <div style={productNameStyle}>제품명</div>
                <div style={optionNameStyle}>옵션 명</div>
                <div style={iconGroupStyle}>
                    <img onClick={handleDecrease} style={iconStyle} src={MinusButton} alt="Minus" />
                    <span style={quantityStyle}>{quantity}</span>
                    <img onClick={handleIncrease} style={iconStyle} src={PlusButton} alt="Plus" />
                </div>
            </div>
        </div>
    );
};

export default WishItem;
