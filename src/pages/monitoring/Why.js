import React from "react";
import why1 from "../../assets/why1.png";
import why2 from "../../assets/why2.png";
import why3 from "../../assets/why3.png";
import why4 from "../../assets/why4.png";
import styled from "styled-components";

export default function Why() {
  const whyComponent = [
    {
      number: "01",
      title: "비용부담 최소화",
      descript:
        "별도의 서버 구축 및 정기 유지 보수 필요성이 낮아 비용 부담 적음",
      img: why1,
    },
    {
      number: "02",
      title: "시공간 제약 없음",
      descript: "시간, 장소 구애없이 환자의 상태 모니터링 가능",
      img: why2,
    },
    {
      number: "03",
      title: "맞춤형 서비스 제공",
      descript: "다양한 연령층의 환자들에게 맞춤 알림 세팅 가능",
      img: why3,
    },
    {
      number: "04",
      title: "업무 효율 향상",
      descript: "이벤트 로그가 자동 기록되어 업무 효율성 향상",
      img: why4,
    },
  ];

  return (
    <TextContainer>
      <TitleText>왜 하이카디를 선택해야 할까요?</TitleText>
      <ComponentBox>
        {whyComponent.map((item, index) => (
          <WhyBox key={index}>
            <div>
              <Line1Text>
                {" "}
                <NumberBox>{item.number}</NumberBox>
                <TitleBox>{item.title}</TitleBox>
              </Line1Text>

              <WhyDescript>{item.descript}</WhyDescript>
            </div>

            <div>
              <img src={item.img} alt={`why${index + 1}`} />
            </div>
          </WhyBox>
        ))}
      </ComponentBox>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  /* background-color: skyblue; */
  /* padding: 200px; */
  width: 100%;
  /* height: 100vh; */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const TitleText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-align: center;
  /* border: 1px solid red; */
  margin-top: 100px;
  margin-bottom: 100px;
`;

const WhyBox = styled.div`
  /* width: 600px;
  height: 200px; */
  width: 550px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--gray-50, #f4f8fd);
  margin: 20px;

  //
  padding: 40px 45px;
  box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 50px;
`;

const ComponentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
  grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
  justify-content: center;
  margin: 0 auto;
  /* border: 1px solid red; */
  width: 70%;
  margin-bottom: 100px;
`;

const NumberBox = styled.div`
  color: var(--blue, #18afdd);
  /* H0 */
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
`;

const TitleBox = styled.div`
  color: #000;
  /* H0 */
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
  position: relative;
`;

const Line1Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-bottom: 16px;
`;

const WhyDescript = styled.div`
  color: var(--gray-600, #666b6f);

  /* H2 */
  font-family: Pretendard;
  font-size: 1.12rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
`;
