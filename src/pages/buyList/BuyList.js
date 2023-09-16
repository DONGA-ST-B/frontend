import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [products, setProducts] = useState([]);
  const category = "TOTAL";
  const url = `https://www.kusitms28.shop/api/product/category/${category}`; // API 엔드포인트 URL을 설정하세요.

  useEffect(() => {
    // 데이터를 불러오는 함수를 정의합니다.
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data.data;
        setProducts(data); // API로부터 받은 데이터를 상태에 저장합니다.
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchData(); // 데이터를 불러오는 함수를 실행합니다.
  }, [url]); // useEffect는 URL이 변경될 때마다 호출됩니다.


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
