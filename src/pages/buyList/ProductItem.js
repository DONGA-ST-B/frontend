import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
import BuyWishIcon from "../../assets/BuyWish.png";
import BuyLikeIcon from "../../assets/BuyLike.png";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ name, imageSrc, description, price, index }) => {
    const [isInCart, setIsInCart] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    const handleCartClick = () => {
        setIsInCart(!isInCart);
        const message = isInCart ? "상품을 장바구니에서 제거했습니다." : "상품을 장바구니에 추가했습니다.";
        alert(message);
    };

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handleProductClick = () => {
        // 해당 제품의 상세 페이지로 이동
        navigate(`/product-detail/${encodeURIComponent(index)}`);
    };


    return (
        <div style={styles.product}>
            <div style={styles.imageContainer}>
                <img src={imageSrc} alt={name} style={styles.productImage} onClick={handleProductClick} />
            </div>
            <div style={styles.productInfo}>
                <div style={styles.productNameDescription}>
                    <h3 style={styles.productName} onClick={handleProductClick}>
                        {name}
                    </h3>
                    <p style={styles.productDescription}>{description}</p>
                </div>
                <div style={styles.menuGroup}>
                    <h3 style={styles.productPrice}>{price}</h3>
                    <div style={styles.iconGroup}>
                        <span
                            role="img"
                            aria-label="장바구니"
                            style={styles.icon}
                            onClick={handleCartClick}
                        >
                            {isInCart ? (
                                <img src={BuyWishIcon} alt="장바구니" style={styles.iconImage} />
                            ) : (
                                <img src={BuyWishIcon} alt="장바구니" style={styles.iconImage} />
                            )}
                        </span>
                        <span
                            role="img"
                            aria-label="좋아요"
                            style={styles.icon}
                            onClick={handleLikeClick}
                        >
                            {isLiked ? (
                                <img src={BuyLikeIcon} alt="좋아요" style={styles.iconImage} />
                            ) : (
                                <img src={BuyLikeIcon} alt="좋아요" style={styles.iconImage} />
                            )}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginLeft: "40%",
        marginRight: "40%",
        borderRadius: "20px",
    },
    product: {
        width: "45%",
        height: "807px",
        marginBottom: "20px",
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: "#fff",
    },
    imageContainer: {
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px 20px 0 0",
    },
    productImage: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    productInfo: {
        height: "320px",
        padding: "40px",
        textAlign: "left",
        backgroundColor: "#FAFAFA",
        borderRadius: "0 0 20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    productNameDescription: {
        marginBottom: "16px",
    },
    productName: {
        fontSize: "24px",
        color: COLORS.GRAY_900,
    },
    productDescription: {
        fontSize: "16px",
        color: COLORS.GRAY_500,
    },
    productPrice: {
        fontSize: "34px",
        color: COLORS.GRAY_900,
    },
    menuGroup: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "40px", // 메뉴 그룹을 아래로 붙임
    },

    iconGroup: {
        display: "flex",
        gap: "8px",
    },
    icon: {
        fontSize: "24px",
    },
    iconImage: {
        width: "48px",
        height: "48px",
        color: "red",
    },
};

export default ProductItem;
