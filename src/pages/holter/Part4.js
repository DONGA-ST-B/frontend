import React from "react";
import img1 from "../../assets/prat4-1.png";
import img2 from "../../assets/part4-2.png";
import styled from "styled-components";

export default function Part4() {
  return (
    <WindowBox>
      <Container>
        <TitleBox>
          {" "}
          <MiddleText>HiCardi LiveStudio</MiddleText>
          <TextTitle>부정맥 분석을 위한 솔루션</TextTitle>
          <Descript>
            환자 심전도 데이터를 수신받아 AI 자동 분석을 통해 1차 부정맥을
            진단한 후 임상병리사와 부정맥전문의의 부정맥 진단 소견을 통해 최종
            레포트를 제공합니다.
          </Descript>
        </TitleBox>{" "}
        <ImgBox>
          <StyledImg src={img1} alt="" />
          <StyledImg src={img2} alt="" />
        </ImgBox>
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
  /* background-color: skyblue; */
  align-items: center;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const MiddleText = styled.div`
  color: var(--blue, #18afdd);
  font-family: Pretendard;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
`;

const TextTitle = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 64px */
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

const Descript = styled.div`
  color: var(--gray-900, #15191d);
  text-align: center;

  /* H2 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */

  width: 58%;
  margin: 0 auto;
  margin-top: 56px;
  margin-bottom: 100px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  /* border: 1px solid red; */
`;
const StyledImg = styled.img`
  width: 34vw;
  height: auto;
`;
