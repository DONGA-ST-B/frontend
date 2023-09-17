import React, { useState, useEffect } from "react";
import axios from "axios";
import { COLORS } from "../../styles/colors";
import MinusButton from "../../assets/MinusButton.png"
import PlusButton from "../../assets/PlusButton.png"

const WishItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);

    const wishItemStyle = {
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
    };

    const imageStyle = {
        width: "110px",
        height: "110px",
        marginRight: "40px",
    };

    const textBoxStyle = {
        flex: 1,
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
                src={item.product.photoUrl}
                alt="Product"
            />
            <div style={textBoxStyle}>
                <div style={productNameStyle}>{item.product.productName}</div>
                <div style={optionNameStyle}>{item.product.optionName}</div>
                <div style={iconGroupStyle}>
                    <img onClick={handleDecrease} style={iconStyle} src={MinusButton} alt="Minus" />
                    <span style={quantityStyle}>{quantity}</span>
                    <img onClick={handleIncrease} style={iconStyle} src={PlusButton} alt="Plus" />
                </div>
            </div>
        </div>
    );
};

const WishListPage = () => {
    const [cartData, setCartData] = useState(null);

    const fetchCartData = () => {
        axios.get(`https://www.kusitms28.shop/api/cart/1`)
            .then((response) => {
                setCartData(response.data);
            })
            .catch((error) => {
                console.error("API 요청 중 에러 발생:", error);
            });
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    return (
        <div>
            {cartData && cartData.cartItems.map((item) => (
                <WishItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default WishListPage;
