import React from "react";
import styled from "styled-components";
import tableImg from "../../assets/monitoring-table.png";
import telImg from "../../assets/telemetry_img.png";

export default function Telemetry() {
  return (
    <Container>
      <TextBox>
        <TitleText>HiCardi® Telemetry</TitleText>
        <BlueText>보험급여</BlueText>
      </TextBox>

      <ImgBox>
        <img src={tableImg} alt="" /> <img src={telImg} alt="" />
      </ImgBox>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: pink; */
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 100px;
  justify-content: center;
  margin-bottom: 80px;
`;

const TitleText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.15px;
`;

const BlueText = styled.div`
  color: #1aaede;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.15px;
`;

const ImgBox = styled.div`
  margin: 0 auto;

  width: 56%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: center;
  margin-bottom: 200px;
`;
