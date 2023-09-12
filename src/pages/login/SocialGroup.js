import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SocialButton from "./SocialButton"; 
import Naver from "../../assets/Naver.png"
import Kakao from "../../assets/Kakao.png"
import Google from "../../assets/Google.png"

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
  return (
    <SocialGroupWrapper>
      <Link to="/naver-login">
        <SocialButton logoSrc={Naver} />
      </Link>
      <Link to="/kakao-login">
        <SocialButton logoSrc={Kakao} />
      </Link>
      <Link to="/google-login">
        <SocialButton logoSrc={Google} />
      </Link>
    </SocialGroupWrapper>
  );
};

export default SocialGroup;
