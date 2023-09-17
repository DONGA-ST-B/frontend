import React from "react";
import { COLORS } from "../../styles/colors";

const WishPrice = ({ cartData }) => {
    const priceStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "4px",
        color: COLORS.GRAY_900,
    };

    const priceTextStyle = {
        fontSize: "24px",
        marginBottom: "4px",
        color: COLORS.GRAY_900,
    };

    const deliveryStyle = {
        fontSize: "16px",
        marginBottom: "16px",
        color: COLORS.GRAY_500,
    };

    const orderButtonStyle = {
        width: "152px",
        height: "42px",
        borderRadius: "8px",
        backgroundColor: COLORS.BLUE,
        color: COLORS.WHITE,
        fontSize: "16px", // 텍스트 크기 조정
        fontWeight: "bold", // 텍스트 굵기 조정
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    };

    return (
        <div>
            <div style={priceTextStyle}>
                <span style={priceStyle}>100</span>{cartData && cartData.totalPrice} 원
            </div>
            <div style={deliveryStyle}>
                무료 (기본배송)
            </div>
            <div style={orderButtonStyle}>주문하기</div>
        </div>
    );
};

export default WishPrice;
