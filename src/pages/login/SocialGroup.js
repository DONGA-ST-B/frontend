import React, { useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import Naver from "../../assets/Naver.png";
import Kakao from "../../assets/Kakao.png";
import Google from "../../assets/Google.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Cookies from 'js-cookie';

const SocialGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const SocialGroup = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleGoogleLogin = async () => {
    try {
      const redirectUri = "https://www.kusitms28.shop/auth/google"; // Google Cloud Console에 설정한 리다이렉션 URI로 수정
  
      const clientId = "246666582622-e0lnk1uurrro5kj3qjim16lhtguhvdki.apps.googleusercontent.com"; 
  
      // 요청할 스코프 설정
      const scope = "profile email"; 
  
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    } catch (error) {
      console.error("Google 로그인 요청에 실패했습니다.", error);
    }
  };


  // 컴포넌트가 렌더링될 때마다 현재 URL을 확인하여 승인 코드 처리
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code"); // URL에서 승인 코드 추출

    if (code) {
      // 승인 코드를 사용하여 추가 작업 수행
      console.log("Google 로그인 승인 코드:", code);

      // 이후에 토큰을 요청하거나 원하는 작업을 수행할 수 있음

      // 로그인 성공 시 메인 페이지로 이동
      navigate("/");
    }
  }, [location, navigate]);

  

  return (
    <SocialGroupWrapper>
      <Link to="/naver-login">
        <SocialButton logoSrc={Naver} />
      </Link>
      <Link to="/kakao-login">
        <SocialButton logoSrc={Kakao} />
      </Link>
      <Button onClick={handleGoogleLogin}>
        <SocialButton logoSrc={Google} />
      </Button>
    </SocialGroupWrapper>
  );
};

export default SocialGroup;
