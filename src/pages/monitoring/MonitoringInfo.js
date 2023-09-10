import React, { useEffect, useRef, useState } from "react";
import monitoring_img from "../../assets/monitoring-solution-img.jpg";
import styled, { keyframes } from "styled-components";
import SmartPatch from "./SmartPatch";
// import { ScrollAnimationContainer } from "./ScrollAnimationContainer.tsx";
import StatusMonitoring from "./StatusMonitoring";

export default function MonitoringInfo() {
  return (
    <InfoContainer>
      <BackImg>
        {/* <ScrollAnimationContainer> */}
        <TextContainer>
          <MiddleText>환자 모니터링 솔루션</MiddleText>
          <BigText>
            HiCardi하이카디는 웨어러블 스마트 패치를 통해 실시간 원격 모니터링을
            제공합니다.
          </BigText>
          <TextDescrip>
            의료진이 실시간으로 환자를 더욱 집중 관리할 수 있도록 심전도(ECG),
            호흡, 피부온과 같은 환자의 생리학적 모니터링 정보를 제공합니다. 국내
            유일 심평원 수가를 받은 제품으로 합리적인 비용으로 간편하게 측정할
            수 있습니다.
          </TextDescrip>
        </TextContainer>
        {/* </ScrollAnimationContainer> */}
      </BackImg>

      {/* <ScrollAnimationContainer> */}
      <SmartPatch />
      {/* </ScrollAnimationContainer> */}

      {/* <ScrollAnimationContainer> */}
      <StatusMonitoring />
      {/* </ScrollAnimationContainer> */}
    </InfoContainer>
  );
}

const BackImg = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  height: 93vh;
  background-image: url(${monitoring_img});
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 30%,
      transparent 100%
    ),
    url(${monitoring_img});
  /* background: linear-gradient(); */
  background-size: cover;
  background-position: center;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.7;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
`;

const TextContainer = styled.div`
  width: 60%;
  /* border: 1px solid red; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  /* position: absolute;
  left: 165px;
  top: 234px; */
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

const TextTitle = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 64px */
`;
