import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SocialButton from "./SocialButton";
import Naver from "../../assets/Naver.png";
import Kakao from "../../assets/Kakao.png";
import Google from "../../assets/Google.png";
import axios from "axios";
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

  const handleGoogleLogin = async () => {
    try {
      // Google OAuth 인증을 위한 리다이렉션 URI
      const redirectUri = "https://www.kusitms28.shop/auth/google";

      // 클라이언트 아이디 설정
      const clientId = "246666582622-e0lnk1uurrro5kj3qjim16lhtguhvdki.apps.googleusercontent.com"; 

      // 구글 로그인 페이지로 리다이렉션
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=YOUR_SCOPE`;

    } catch (error) {
      console.error("Google 로그인 요청에 실패했습니다.", error);
    }
  };

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
