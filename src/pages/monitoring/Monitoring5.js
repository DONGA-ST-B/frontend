import React from "react";
import styled from "styled-components";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/monitor_icon2.png";
import img3 from "../../assets/monitor_icon3.png";
import nextIcon from "../../assets/ion_chevron-back.svg";

export default function Monitoring5() {
  return (
    <WindowBox>
      <Container>
        <InsideTitle>이제 하이카디로 손 쉽게 검사할 수 있어요</InsideTitle>
        <RowBox>
          {" "}
          <UnderBox>
            <WhiteCircle>
              <StyledImg src={img1} alt="" />
            </WhiteCircle>
            <CircleText>
              하이카디 스마트패치를 통해 <br></br>환자의 생리학적 데이터 실시간
              측정
            </CircleText>
          </UnderBox>
          <img src={nextIcon} alt="" />
          <UnderBox>
            <WhiteCircle>
              <StyledImg src={img2} alt="" />
            </WhiteCircle>
            <CircleText>
              모바일 앱으로<br></br> 환자의 실시간 상태 모니터링
            </CircleText>
          </UnderBox>
          <img src={nextIcon} alt="" />
          <UnderBox>
            <WhiteCircle>
              <StyledImg src={img3} alt="" />
            </WhiteCircle>
            <CircleText>
              클라우드(AWS)에서 가동되는<br></br>소프트웨어로 환자의 상태
              모니터링<br></br>
              <CircleSubText>(동시에 최대 128명까지 가능)</CircleSubText>
            </CircleText>
          </UnderBox>
        </RowBox>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  background-color: #18afdd;
  width: 100%;
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  /* background-color: skyblue; */
  width: 100%;
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
  color: var(--backdround_grey, #f8f8f8);
  font-family: S-Core Dream;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 42.622px;
  letter-spacing: -0.735px;
`;

const CircleSubText = styled.div`
  font-size: 1rem;
  color: var(--gray-100, #edf1f7);
  font-family: S-Core Dream;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 42.622px;
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
  object-fit: contain;
`;
