import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 440px;
  height: 56px;
  border-radius: 50px;
  background-color: ${COLORS.GRAY_50};
  border: none;
  padding: 0 24px;
  font-size: 16px;
  color: ${COLORS.GRAY_900};
  outline: none;

  @media (max-width: auto) {
    width: 100%;
  }
`;

const HintText = styled.div`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: ${COLORS.GRAY_400};
  pointer-events: none;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.showHint ? 1 : 0)};
`;

function LoginInput() {
  const [showIdHint, setShowIdHint] = useState(true);
  const [showPasswordHint, setShowPasswordHint] = useState(true);

  const handleIdInputChange = (event) => {
    if (event.target.value !== "") {
      setShowIdHint(false);
    } else {
      setShowIdHint(true);
    }
  };

  const handlePasswordInputChange = (event) => {
    if (event.target.value !== "") {
      setShowPasswordHint(false);
    } else {
      setShowPasswordHint(true);
    }
  };

  return (
    <CenteredContainer>
      <InputContainer>
        <InputWrapper>
          <Input
            type="text"
            onChange={handleIdInputChange}
          />
          <HintText showHint={showIdHint}>아이디</HintText>
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            onChange={handlePasswordInputChange}
          />
          <HintText showHint={showPasswordHint}>비밀번호</HintText>
        </InputWrapper>
      </InputContainer>
    </CenteredContainer>
  );
}

export default LoginInput;
