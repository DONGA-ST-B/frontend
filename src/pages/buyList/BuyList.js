import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

const BuyList = ({ category, onCategoryChange }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://www.kusitms28.shop/api/product/category/${category}`;
        const response = await axios.get(url);
        const data = response.data.data;
        setProducts(data);
        onCategoryChange(category);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchData(); 
  }, [category, onCategoryChange]); 

  return (
    <div style={styles.container}>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.productName}
          imageSrc={product.photoUrl}
          description={product.additionalDescription}
          price={product.price}
          index={index}
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
