import React, { useState } from 'react';
import { GoogleLoginButton } from '@react-oauth/google';
import axios from 'axios';
import Cookies from 'js-cookie';

const GoogleLogin = () => {
  const [message, setMessage] = useState('');

  const handleGoogleLogin = async () => {
    try {
      // Google 로그인 버튼을 클릭하면 Google 로그인 팝업이 열립니다.
      const result = await GoogleLoginButton();
      
      // 로그인 성공 시 구글 제공 정보 사용
      const { id_token } = result;
      
      // 백엔드 서버로 id_token을 전송하여 로그인 처리
      const response = await axios.post('https://www.kusitms28.shop/auth/google', { id_token });

      // 요청이 성공하면 서버에서 반환한 메시지를 상태에 저장
      setMessage(response.data.message);

      // 쿠키에서 JSESSIONID 값을 추출
      const jsessionid = response.headers['set-cookie'].find(cookie => cookie.startsWith('JSESSIONID='));

      if (jsessionid) {
        // JSESSIONID 쿠키를 설정
        Cookies.set('JSESSIONID', jsessionid, { expires: 1 }); // 쿠키 만료일 설정
      }

      // 로그인 성공 시 리다이렉션 (원하는 경로로 변경)
      window.location.href = '/success-page'; // 예시로 '/success-page'로 리다이렉션합니다.
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
