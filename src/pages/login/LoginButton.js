import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 440px; /* 부모 컨테이너의 너비에 맞춤 */
  height: 56px;
  border-radius: 50px;
  background-color: ${COLORS.BLUE};
  border: none;
  font-size: 16px;
  color: ${COLORS.WHITE};
  font-weight: bold;
  text-align: center;
  outline: none;
  cursor: pointer;
`;

function LoginButton() {
  const handleLoginClick = () => {
    alert("로그인!"); 
  };

  return (
    <CenteredContainer>
      <StyledButton onClick={handleLoginClick}>로그인</StyledButton>
    </CenteredContainer>
  );
}

export default LoginButton;
