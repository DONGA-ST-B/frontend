import { Check } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Close } from "@mui/icons-material";

const CompleteDemo = () => {
  return (
    <ModalContainer>
      <ExitIcon>
        <Close />
      </ExitIcon>
      <TextBox>
        <CheckIconBox>
          <Check style={{ color: "white", fontSize: "60px" }} />
        </CheckIconBox>
        <CheckTitle>신청이 완료되었습니다!</CheckTitle>
        <CheckNotice>
          영업일 기준 1~3일 내에 연락 드리겠습니다.
          <br />
          하이카디에 관심 가져주셔서 감사합니다 :)
        </CheckNotice>
      </TextBox>
    </ModalContainer>
  );
};

const ExitIcon = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 18px;
  top: 20px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 440px;
  height: 740px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 44px 40px;
  /* border: 1px solid red; */
  margin: 0 auto;
`;

const CheckIconBox = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 100%;
  background-color: #18afdd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckTitle = styled.div`
  color: var(--gray-900, #15191d);

  /* H2_B */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 38.4px */
`;

const CheckNotice = styled.div`
  color: var(--gray-500, #8e9398);
  text-align: center;

  /* B2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;

export default CompleteDemo;
