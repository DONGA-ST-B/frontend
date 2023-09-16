import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";

const GoogleLogin = () => {
  return (
    <div>
      <Header />
      <LoginContainer></LoginContainer>
      <Footer />
    </div>
  );
};

const LoginContainer = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 100vh;
`;

export default GoogleLogin;
