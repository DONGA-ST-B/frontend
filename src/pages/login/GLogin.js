import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GLogin = () => {
  const successGoogle = (res) => {
    console.log(res);
  };

  const failGoogle = (res) => {
    console.log(res);
  };

  const onLogoutSuccess = () => {
    console.log("로그아웃 성공");
  };

  return (
    <div>
      <Header />
      <LoginContainer>
        <GoogleLogin
          clientId=""
          buttonText="로그인"
          onSuccess={successGoogle}
          onFailure={failGoogle}
        />
        <GoogleLogout clientId="" onLogoutSuccess={onLogoutSuccess} />
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
