import React from "react";
import styled from "styled-components";
import nextIcon from "../../assets/ion_chevron-back.svg";

export default function Page5() {
  return (
    <Layout>
      <InsideBox>
        <InsideTitle>이제 하이카디로 손 쉽게 검사할 수 있어요</InsideTitle>
        {/* <ContentBox>
          <Onebox>
            {" "}
            <Circle></Circle>
            <CircleText>
              하이카디 스마트패치를 통해 환자의 생리학적 데이터 실시간 측정
            </CircleText>
          </Onebox>
          <div
            style={{
              position: "relative",
              top: "160px",
              height: "60px",
              margin: "0 98px 0 98px",
            }}
          >
            <img src={nextIcon} alt="" />
          </div>

          <Onebox>
            {" "}
            <Circle></Circle>
            <CircleText>모바일 앱으로 환자의 실시간 상태 모니터링</CircleText>
          </Onebox>
          <div
            style={{
              position: "relative",
              top: "160px",
              height: "60px",
              margin: "0 98px 0 98px",
            }}
          >
            <img src={nextIcon} alt="" />
          </div>
          <Onebox>
            {" "}
            <Circle></Circle>
            <CircleText>
              클라우드(AWS)에서 가동되는 소프트웨어로 환자의 상태 모니터링
              <p>(동시에 최대 128명까지 가능)</p>
            </CircleText>
          </Onebox>
        </ContentBox> */}
      </InsideBox>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* height: 100vh; */
  flex-direction: column;
  align-items: center;
  background: var(--blue, #18afdd);
`;

const InsideBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const InsideTitle = styled.div`
  color: var(--system-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 76.8px */
  margin-top: 80px;
`;

const ContentBox = styled.div`
  display: flex;
  border: 1px solid blue;
  justify-content: center;
  text-align: center;
`;

const Circle = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 360px;
  margin: 0 auto;
  margin-bottom: 48px;
  background: var(--system-white, #fff);

  @media (max-width: 768px) {
    width: 250px; /* 작은 화면에서 더 작은 크기로 조절 */
    height: 250px;
  }
`;

const CircleText = styled.div`
  color: var(--backdround_grey, #f8f8f8);
  font-family: S-Core Dream;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 42.622px;
  letter-spacing: -0.735px;
  /* border: 1px solid black; */
  width: 423px;
`;

const Onebox = styled.div`
  border: 1px solid yellow;

  @media (max-width: 768px) {
    margin: 0 5px; /* 작은 화면에서 더 작은 간격으로 조절 */
  }
`;
