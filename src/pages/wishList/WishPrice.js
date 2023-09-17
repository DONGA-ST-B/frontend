import React from "react";
import { COLORS } from "../../styles/colors";

const WishPrice = ({ cartData }) => {
    const priceStyle = {
        fontSize: "H3",
        fontWeight: "bold",
        color: COLORS.GRAY_900,
    };
    


    const deliveryStyle = {
        fontSize: "B1",
        color: COLORS.GRAY_500,
    };

    return (
        <div>
            <div style={priceStyle}>
                {cartData && cartData.totalPrice} 원
            </div>
            <div style={deliveryStyle}>
                무료 (기본배송)
            </div>
            <div>
                주문하기
            </div>
        </div>
    );
};



export default WishPrice;
