import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { Button } from "@mui/base";
import axios from "axios";

const GLogin = ({ onSocial }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  });

  const clientId =
    "246666582622-e0lnk1uurrro5kj3qjim16lhtguhvdki.apps.googleusercontent.com";

  const successGoogle = (res) => {
    console.log(res);
  };

  const failGoogle = (res) => {
    console.log(res);
  };

  const onLogoutSuccess = () => {
    console.log("로그아웃 성공");
  };

  const [message, setMessage] = useState(""); // 서버 응답 메시지를 저장할 상태

  const handleGoogleLogin = async () => {
    try {
      // 구글 로그인 API 요청 보내기
      const response = await axios.get(
        "https://www.kusitms28.shop/auth/google"
      );
      console.log("response");

      // 요청이 성공하면 서버에서 반환한 메시지를 상태에 저장
      setMessage(response.data.message);
    } catch (error) {
      // 요청이 실패하면 에러 메시지를 상태에 저장
      setMessage("구글 로그인에 실패했습니다.");
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <LoginContainer>
        <GoogleLogin
          clientId={clientId}
          buttonText="구글 아이디로 로그인하기"
          onSuccess={successGoogle}
          onFailure={failGoogle}
          // onClick={handleGoogleLogin}
        />
        <Button onClick={handleGoogleLogin}>구글로그인</Button>
        <GoogleLogout clientId={clientId} onLogoutSuccess={onLogoutSuccess} />
      </LoginContainer>
      <Footer />
    </div>
  );
};

const LoginContainer = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 100vh;
`;

export default GLogin;
