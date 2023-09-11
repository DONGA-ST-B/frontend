import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const LoginTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${COLORS.GRAY_900};
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${COLORS.GRAY_600};
  margin-top: 8px;
`;

function LoginTextBoxComponent() {
  return (
    <LoginTextBox>
      <Title>로그인</Title>
      <Subtitle>회원이 되시면 다양한 혜택과 서비스를 받으실 수 있습니다.</Subtitle>
    </LoginTextBox>
  );
}

export default LoginTextBoxComponent;
