import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import backImg from "../../assets/holter1.png";

export default function Part1() {
  return (
    <WindowBox>
      <Container>
        <TextContainer>
          {" "}
          <MiddleText>홀터 솔루션</MiddleText>
          <BigText>
            HiCardi+하이카디플러스는 장시간 검사를 통해 정확한 부정맥 진단을
            제공합니다.
          </BigText>
          <TextDescrip>
            하이카디는 15가지 유형의 부정맥을 탐지할 수 있으며, 부정맥 전문의의
            원격판독 서비스를 제공하여 진단 Report를 발행할 수 있습니다. 작고
            가벼운 웨어러블 스마트 패치로 무겁고 복잡했던 기존 Holter 장비의
            한계를 해결합니다.
          </TextDescrip>
        </TextContainer>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  /* background-color: skyblue; */
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  /* background-color: yellow; */
  background-image: url() (${backImg});

  background: linear-gradient(
      90deg,
      #f4f8fd 29.17%,
      rgba(255, 255, 255, 0) 100%,
      rgba(255, 240, 242, 0.3) 100%
    ),
    url(${backImg}), lightgray 444.805px -136.739px / 100% 128.413% no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
`;

const TextContainer = styled.div`
  display: flex;
  margin: 200px 150px 200px 150px;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid red; */
  gap: 56px;
  width: 60%;
  /* height: 70%; */
`;

const BigText = styled.div`
  color: var(--gray-900, #15191d);
  /* font-family: Pretendard; */
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  color: black;
  line-height: 160%; /* 89.6px */
`;

const MiddleText = styled.div`
  color: var(--blue, #18afdd);
  font-family: Pretendard;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
`;

const TextDescrip = styled.div`
  color: var(--gray-500, #8e9398);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 44.8px */
`;
