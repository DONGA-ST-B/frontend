import axios from "axios";

// productId를 전달받아 해당 제품 정보를 가져오는 함수
const fetchProductInfo = async (productId) => {
  try {
    const response = await axios.get(`https://www.kusitms28.shop/api/product/${productId}`);
    return response.data.data; // API 응답에서 필요한 데이터 추출
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    // 오류 메시지를 사용자에게 표시
    alert("제품 정보를 불러오는 중 오류가 발생했습니다.");
    return null; // 오류 발생 시 null 반환
  }
};

export default fetchProductInfo;
