import React, { Children, useState } from "react";
import styled from "styled-components";
import { Close } from "@mui/icons-material";
import DemoModal from "./DemoModal";

const InitialDemo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const toggleDemo = () => {
    setIsOpen(!isOpen);
  };

  const toggleDemoModal = () => {
    setShowDemoModal(!showDemoModal);
  };

  return (
    <>
      {" "}
      <ModalContainer show={props.show}>
        <ExitIcon onClick={props.onClick}>
          <Close />
        </ExitIcon>
        <TextBox>
          <TitleText>데모 신청하기</TitleText>

          <InputBox>
            <PerBox>
              <InputTitle>데모</InputTitle>
              <DesText>
                관심있는 제품을 선택하여 데모를 신청하실 수 있습니다.데모 신청
                시 제공해 주신 연락처로 상담사가 안내 연락을 드릴 예정입니다.
              </DesText>
            </PerBox>
            <PerBox>
              <InputTitle>데모 기간 : 2-4주</InputTitle>
            </PerBox>
            <PerBox>
              <InputTitle>진행 절차</InputTitle>
              <CircleBox>
                <OrderCircle>
                  <CircleText>데모 신청</CircleText>
                </OrderCircle>
                <OrderCircle>
                  <CircleText>장비 선정 및 일정 조율</CircleText>
                </OrderCircle>
                <OrderCircle>
                  <CircleText>장비 전달/사용자 교육</CircleText>
                </OrderCircle>
                <OrderCircle>
                  <CircleText>데모 종료 후 장비 회수</CircleText>
                </OrderCircle>
              </CircleBox>
            </PerBox>
            <ApplyButton onClick={toggleDemo}>다음</ApplyButton>
          </InputBox>
        </TextBox>
      </ModalContainer>
      {isOpen && <DemoModal show={isOpen} onClick={toggleDemo} />}
    </>
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
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 44px 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  /* border: 1px solid red; */
`;

const TitleText = styled.div`
  color: var(--gray-900, #15191d);

  /* H2_B */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 38.4px */
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  gap: 40px;
  width: 100%;
  /* border: 1px solid red; */
`;

const PerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  /* border: 1px solid red; */
`;

const InputTitle = styled.div`
  color: var(--gray-900, #15191d);

  /* B2 b */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
  /* border: 1px solid blue; */
`;

const DesText = styled.div`
  color: var(--gray-900, #15191d);

  /* B2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;

const ApplyButton = styled.button`
  border-radius: 50px;
  background: var(--blue, #18afdd);
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  //
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  color: var(--system-white, #fff);

  /* B2 b */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;

  margin-top: 48px;
`;

const CircleBox = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  margin: 15px 0px;
  /* border: 1px solid red; */
  /* width: 100%; */
`;

const CircleText = styled.div`
  color: var(--gray-500, #8e9398);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: 0.072px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderCircle = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  /* fill: var(--gray-50, #f4f8fd); */
  background-color: #f4f8fd;
  /* background-color: #e9f7ff; */
  border-radius: 100%;
  display: flex;
  justify-content: center;
  padding: 7px;
`;

export default InitialDemo;
