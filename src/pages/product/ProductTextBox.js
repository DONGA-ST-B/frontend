import React from 'react';

function ProductBox({ productName, productNameEnglish, description, price }) {
  const productBoxStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333', // GRAY_900
    marginBottom: '8px',
  };

  const productNameEnglishStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#888', // GRAY_500
    marginTop: '8px',
    marginBottom: '16px',
  };

  const productDescriptionStyle = {
    fontSize: '18px',
    color: '#888', // GRAY_500
    marginTop: '16px',
    marginBottom: '32px',
  };

  const productPriceStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333', // GRAY_900
    marginTop: '32px',
  };

  return (
    <div>
      <div style={productBoxStyle}>{productName}</div>
      <div style={productNameEnglishStyle}>{productNameEnglish}</div>
      <div style={productDescriptionStyle}>{description}</div>
      <div style={productPriceStyle}>{price}</div>
    </div>
  );
}

export default ProductBox;
