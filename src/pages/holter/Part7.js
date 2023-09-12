import React from "react";
import styled from "styled-components";
import { Check } from "@mui/icons-material";

export default function Part7() {
  const status = [
    { text: "일정 시간 동안 심박 검출되지 않음", eng: "PAUSE" },
    { text: "심장박동 정지", eng: "Asystole" },
    { text: "심실 조동/세동", eng: "Ventricular flutter/fibrillation" },
    { text: "심실 조기 수축", eng: "Premature venticular contraction" },
    { text: "심실 빈맥", eng: "Ventricular tachycardia" },
    { text: "심실 이단맥", eng: "Ventricular bigeminy" },
    { text: "심실 삼단맥", eng: "Ventricular trigeminy" },
    { text: "심실 조기 수축 2회 연속", eng: "Couplet" },
    { text: "심실 조기 수축 3회 연속", eng: "Triplet" },
    { text: "동서맥", eng: "Sinus bradycardia" },
    { text: "심방 빈맥", eng: "Atrial tachycardia" },
    { text: "동빈맥", eng: "Sinus tachycardia" },
    { text: "심실상 빈맥", eng: "Supra-ventricular tachycardia" },
    { text: "페이싱 리듬", eng: "Paced rhythm" },
    { text: "심방 세동", eng: "Atrial fibrillation" },
  ];

  return (
    <WindowBox>
      <Container>
        <TextContainer>
          {" "}
          <TextBox>HiCardi® Holter로</TextBox>
          <ColorBox>15가지 유형의 부정맥을 탐지할 수 있습니다.</ColorBox>
        </TextContainer>
        <TableBox>
          {status.map((item, index) => (
            <TableComponent key={index}>
              <LittleLeftBox>
                {" "}
                <CheckIcon>
                  <Check />
                </CheckIcon>
                <LeftText>{item.text}</LeftText>
              </LittleLeftBox>

              <RightBox>{item.eng}</RightBox>
            </TableComponent>
          ))}
        </TableBox>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  /* background-color: gray; */
  /* overflow: hidden; */
  display: flex;
  margin: 0 auto;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 300px 0 300px 0;
`;

const TextBox = styled.div`
  color: #231815;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 76.8px */
`;

const ColorBox = styled.div`
  color: #1aaede;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
`;

const TextContainer = styled.div`
  display: flex;

  width: 73%;
  flex-direction: column;
  text-align: start;
  /* border: 1px solid red; */
  margin-bottom: 90px;
`;

const TableBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 40px;
  /* width: 80%; */
  /* border: 1px solid black; */
  margin-left: 160px;
  margin-right: 160px;
`;

const TableComponent = styled.div`
  display: flex;
  padding: 16px 48px 16px 24px;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  border-radius: 80px;
  border: 2px solid var(--blue, #18afdd);
  height: 48px;
  align-items: center;
`;

const CheckIcon = styled.div`
  background-color: #18afdd;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 36px;
  height: 36px;
`;

const LittleLeftBox = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
  gap: 30px;
  align-items: center;
`;

const LeftText = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 44.8px */
`;

const RightBox = styled.div`
  color: var(--blue, #18afdd);
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 44.8px */
`;
