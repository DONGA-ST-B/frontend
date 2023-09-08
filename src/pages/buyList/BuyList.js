import React from "react";
import ProductImage from "../../assets/ProductItem.png";
import ProductItem from "./ProductItem";

const productList = [
  {
    name: "하이카디플러스 HiCardi+",
    imageSrc: ProductImage,
    description: "한 층 더 업그레이드 된 하이카디 플러스 HiCardi + ",
    price: "2,046,000원",
  },
  {
    name: "하이카디플러스 HiCardi+",
    imageSrc: ProductImage,
    description: "한 층 더 업그레이드 된 하이카디 플러스 HiCardi + ",
    price: "2,046,000원",
  },
  {
    name: "하이카디플러스 HiCardi+",
    imageSrc: ProductImage,
    description: "한 층 더 업그레이드 된 하이카디 플러스 HiCardi + ",
    price: "2,046,000원",
  },
  {
    name: "하이카디플러스 HiCardi+",
    imageSrc: ProductImage,
    description: "한 층 더 업그레이드 된 하이카디 플러스 HiCardi + ",
    price: "2,046,000원",
  },
];

const BuyList = () => {
  return (
    <div style={styles.container}>
      {productList.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          imageSrc={product.imageSrc}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginLeft: "20%",
    marginRight: "20%",
  },
};

export default BuyList;
