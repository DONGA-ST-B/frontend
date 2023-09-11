import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import img from "../../assets/part3.png";
import Check from "@mui/icons-material/Check";

export default function Part3() {
  return (
    <WindowBox>
      <Container>
        <ImgBox>
          <img src={img} alt="" />
        </ImgBox>
        <TextBox>
          <div style={{ marginBottom: "50px" }}>
            {" "}
            <MiddleText>HiCardi SmartView</MiddleText>
            <TextTitle>부정맥 검사 실시간 확인</TextTitle>
          </div>

          <div>
            <PatchBox>
              <Check style={{ color: "#18AFDD" }} />
              <PatchText>
                {" "}
                <TextDescrip>
                  모바일 앱으로, 부정맥 증상/발생시간/지속 시간 등의 상세 내역을
                  기록할 수 있습니다.
                </TextDescrip>
              </PatchText>
            </PatchBox>

            <PatchBox>
              <Check style={{ color: "#18AFDD" }} />
              <PatchText>
                {" "}
                <TextDescrip>
                  환자는 실시간으로 본인의 홀터 검사 기록을 확인할 수 있습니다.
                </TextDescrip>
              </PatchText>
            </PatchBox>
          </div>
        </TextBox>
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
  justify-content: space-between;
`;

const ImgBox = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  position: relative;
  height: 40%;
  left: -160px;
`;

const TextBox = styled.div`
  border-radius: 40px 0px 0px 40px;
  background: var(--backdround_grey, #f8f8f8);
  /* height: 70%; */
  padding: 100px 170px 100px 170px;
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
  /* color: var(--gray-500, #8e9398); */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 44.8px */
`;

const TextTitle = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 64px */
`;

const PatchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 32px;
  /* border: 1px solid black; */
`;

const PatchText = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
`;
