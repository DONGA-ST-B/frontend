import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors"

const LoginBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Separator = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${COLORS.GRAY_300};
`;

const Text = styled.span`
  color: ${COLORS.GRAY_600};
  font-weight: ${TYPOGRAPHY.weight.bold};
`;

const LoginBottom = () => {
  return (
    <LoginBottomWrapper>
      <Text>회원가입</Text>
      <Separator />
      <Text>아이디 찾기</Text>
      <Separator />
      <Text>비밀번호 찾기</Text>
    </LoginBottomWrapper>
  );
};

export default LoginBottom;
