import axios from "axios";

const fetchProductInfo = async (productId) => {
  try {
    const id = parseInt(productId) + 1; 
    const response = await axios.get(`https://www.kusitms28.shop/api/product/${id}`);
    return response.data.data; 
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    alert("제품 정보를 불러오는 중 오류가 발생했습니다.");
    return null; 
  }
};

export default fetchProductInfo;
