import React from "react";
import { COLORS } from "../../styles/colors";


const WishTitle = () => {
    const titleStyle = {
        fontSize: "40px",
        fontWeight: "bold",
        color: COLORS.GRAY_900,
        textAlign: "center",
        margin: "160px 0", 
    };

    return <div style={titleStyle}>장바구니</div>;
};

export default WishTitle;
