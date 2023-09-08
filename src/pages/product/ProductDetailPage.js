import React from "react";
import { useParams } from "react-router-dom"; // React Router의 useParams를 가져옵니다.

const ProductDetail = ({ productList }) => {
  // useParams를 사용하여 현재 선택된 제품의 인덱스를 가져옵니다.
  const { index } = useParams();
  const product = productList[index];

  if (!product) {
    return <div>제품을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageSrc} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
