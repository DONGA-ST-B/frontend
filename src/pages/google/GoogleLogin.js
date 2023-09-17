import React, { useState } from 'react';
import axios from 'axios';

const GoogleLogin = () => {
  const [message, setMessage] = useState(''); // 서버 응답 메시지를 저장할 상태

  const handleGoogleLogin = async () => {
    try {
      // 구글 로그인 API 요청 보내기
      const response = await axios.get('https://www.kusitms28.shop/api/auth/google');

      // 요청이 성공하면 서버에서 반환한 메시지를 상태에 저장
      setMessage(response.data.message);
    } catch (error) {
      // 요청이 실패하면 에러 메시지를 상태에 저장
      setMessage('구글 로그인에 실패했습니다.');
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Google 로그인</button>
      <p>{message}</p>
    </div>
  );
};

export default GoogleLogin;
