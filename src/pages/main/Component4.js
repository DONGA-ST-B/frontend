import React from "react";
import styled from "styled-components";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { Fade } from "react-reveal";

export default function Component4() {
  return (
    <WindowBox>
      <Container>
        <EntireBox>
          {" "}
          <ComponentBox bgImg={img1}>
            <Fade bottom>
              {" "}
              <TextBox>
                {" "}
                <TopText>하이카디는 간편합니다</TopText>
                <BottomText>
                  18g 일체형 하이카디를 부착하기만 하면 <br />
                  알아서 관리해줍니다.
                </BottomText>
              </TextBox>
            </Fade>
          </ComponentBox>
          <ComponentBox bgImg={img2}>
            <Fade bottom>
              <TextBox>
                <TopText>하이카디는 믿을 수 있습니다</TopText>
                <BottomText>
                  2000명 대상의 대규모 임상시험을 통해 <br />
                  안전성과 효과성을 입증하였으며, <br />
                  심평원 수가를 받았습니다.
                </BottomText>
              </TextBox>
            </Fade>
          </ComponentBox>
          <ComponentBox bgImg={img3}>
            <Fade bottom>
              <TextBox>
                <TopText>하이카디는 유일합니다</TopText>
                <BottomText>
                  ‘심전도 침상감시’로 수가 청구가 <br />
                  가능한 국내 유일의 디지털 헬스케어 기기입니다.
                </BottomText>
              </TextBox>
            </Fade>
          </ComponentBox>
        </EntireBox>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  /* background-color: #1aabde; */
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* margin: 300px 0 300px 0; */
  /* padding-top: 70px; */
`;

const ComponentBox = styled.div`
  background: rgba(68, 68, 68, 0.7);
  width: 33%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* 배경 이미지에 대한 상대적 위치 설정 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.bgImg})`} no-repeat 50% 50% / cover;
    background-size: cover;
    filter: blur(2px); /* 배경 이미지에만 blur 적용 */
    opacity: 0.7; /* 배경 이미지의 투명도 설정 */
    z-index: -1; /* 컨텐츠 아래로 내리기 */
    transition: transform 0.3s;
  }

  &:hover::before {
    transform: scale(1.1);
    filter: blur(1px);
  }
`;

// const ComponentBox = styled.div`
//   background: rgba(68, 68, 68, 0.7);
//   /* backdrop-filter: blur(2px); */
//   background: ${(props) => `url(${props.bgImg})`} no-repeat 50% 50% / cover;
//   background-size: cover;

//   width: 33%;
//   /* padding: 200px 100px; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const TopText = styled.div`
  color: var(--system-white, #fff);

  /* H0 */
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
  margin-bottom: 138px;

  /* border: 1px solid red; */
`;

const BottomText = styled.div`
  color: var(--system-white, #fff);
  text-align: center;

  /* H1 */
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 44.8px */
  /* border: 1px solid red; */
  margin: 0px 30px;
`;

const EntireBox = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  height: 70%;
  gap: 15px;
`;

const TextBox = styled.div`
  /* border: 1px solid white; */
  height: 50%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
