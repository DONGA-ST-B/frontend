import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/colors";

const SocialButtonWrapper = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${COLORS.GRAY_50};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialButton = ({ logoSrc }) => {
  return (
    <SocialButtonWrapper>
      <img src={logoSrc} alt="Social Logo" />
    </SocialButtonWrapper>
  );
};

export default SocialButton;
