import React from "react";

const Product = ({ name }) => (
  <div style={styles.product}>
    <div style={styles.productImage}></div>
    <div style={styles.productInfo}>
      <h3>{name}</h3>
    </div>
  </div>
);

const BuyList = () => {
  const productList = [
    { name: "제품 1" },
    { name: "제품 2" },
    { name: "제품 3" },
    { name: "제품 4" },
    { name: "제품 5" },
    { name: "제품 6" },
  ];

  return (
    <div style={styles.container}>
      {productList.map((product, index) => (
        <Product key={index} name={product.name} />
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
  product: {
    width: "45%",
    marginBottom: "20px",
    padding: "10px",
    borderRadius: "10px",
  },
  productImage: {
    width: "100%",
    height: "150px",
    backgroundColor: "#eee",
    borderRadius: "10px",
  },
  productInfo: {
    marginTop: "10px",
    textAlign: "center",
  },
};

export default BuyList;
