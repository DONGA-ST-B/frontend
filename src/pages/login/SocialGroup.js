import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // useNavigate를 import합니다.
import styled from "styled-components";
import SocialButton from "./SocialButton";
import Naver from "../../assets/Naver.png";
import Kakao from "../../assets/Kakao.png";
import Google from "../../assets/Google.png";
import axios from "axios";
import { Button } from "@mui/material";
import Cookies from 'js-cookie'; // js-cookie 라이브러리를 import

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
      const response = await axios.get(
        "https://www.kusitms28.shop/auth/google"
      );
      console.log(response.data);
      console.log("로그인 성공");

      // 쿠키에서 jsessionid 값을 추출
      const jsessionid = response.headers['set-cookie'].find(cookie => cookie.startsWith('JSESSIONID='));

      if (jsessionid) {
        // JSESSIONID 쿠키를 설정
        Cookies.set('JSESSIONID', jsessionid, { expires: 1 }); // 쿠키 만료일 설정
      }

      // 로그인 성공 시 리다이렉션
      navigate('/'); // 원하는 경로로 리다이렉션합니다.
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
        <Link to="https://www.kusitms28.shop/auth/google">
          {" "}
          <SocialButton logoSrc={Google} />
        </Link>
      </Button>
    </SocialGroupWrapper>
  );
};

export default SocialGroup;
