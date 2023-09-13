import React from "react";
import styled from "styled-components";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/icon3.png";
import nextIcon from "../../assets/ion_chevron-back.svg";

export default function Part5() {
  return (
    <WindowBox>
      <Container>
        <InsideTitle>하이카디 부정맥 검사 프로세스</InsideTitle>
        <RowBox>
          {" "}
          <UnderBox>
            <WhiteCircle>
              <StyledImg src={img1} alt="" />
            </WhiteCircle>
            <CircleText>
              하이카디 스마트패치를 부착하여 <br></br>15가지 유형의 부정맥 탐지
            </CircleText>
          </UnderBox>
          <img src={nextIcon} alt="" />
          <UnderBox>
            <WhiteCircle>
              <StyledImg src={img2} alt="" />
            </WhiteCircle>
            <CircleText>
              AI 자동분석 이후 원격 판독 의뢰하여 <br></br>부정맥 소견 작성
            </CircleText>
          </UnderBox>
          <img src={nextIcon} alt="" />
          <UnderBox>
            <WhiteCircle>
              <StyledImg src={img3} alt="" />
            </WhiteCircle>
            <CircleText>
              검사 결과를 기반으로<br></br> 최종 레포트 발행
            </CircleText>
          </UnderBox>
        </RowBox>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  background-color: #18afdd;
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  /* background-color: skyblue; */
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const InsideTitle = styled.div`
  color: var(--system-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 76.8px */

  /* border: 1px solid red; */
`;

const UnderBox = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  max-width: 360px;
`;

const WhiteCircle = styled.div`
  border-radius: 50%;
  background: #fff;
  margin: 30px;

  display: flex;
  justify-content: center;
`;

const CircleText = styled.div`
  color: var(--system-white, #fff);
  text-align: center;
  font-family: S-Core Dream;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 42.622px; /* 152.222% */
  letter-spacing: -0.735px;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
  gap: 70px;
  /* border: 1px solid black; */
`;

const StyledImg = styled.img`
  /* border: 1px solid red; */
  padding: 80px;
  width: 120px;
  height: 120px;
`;
