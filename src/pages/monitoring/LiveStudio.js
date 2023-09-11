import React from "react";
import styled from "styled-components";
import monitor from "../../assets/monitor.png";
import blue_circle from "../../assets/blue_circle.png";

export default function LiveStudio() {
  return (
    <TextContainer>
      <div>
        <TitleBox>
          {" "}
          <MiddleText>HiCardi LiveStudio</MiddleText>
          <TextTitle>중앙 모니터링 솔루션</TextTitle>
        </TitleBox>{" "}
        <LineBox>
          {" "}
          <LeftBox>
            <img src={blue_circle} alt="" />
            <DescriptText>
              부정맥 등 이벤트 발생 시, 시각/오디오 알림을 지원합니다.
            </DescriptText>
          </LeftBox>
          <RightBox>
            <img src={blue_circle} alt="" />
            <DescriptText>
              부정맥 등 이벤트 발생 시, 시각/오디오 알림을 지원합니다.
            </DescriptText>
          </RightBox>
        </LineBox>
        <ItemImg src={monitor} alt="monitor" />
        <LineBox>
          {" "}
          <LeftBox>
            <img src={blue_circle} alt="" />
            <DescriptText>
              부정맥 등 이벤트 발생 시, 시각/오디오 알림을 지원합니다.
            </DescriptText>
          </LeftBox>
          <RightBox>
            <img src={blue_circle} alt="" />
            <DescriptText>
              부정맥 등 이벤트 발생 시, 시각/오디오 알림을 지원합니다.
            </DescriptText>
          </RightBox>
        </LineBox>
      </div>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 80%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* gap: 20px; */
  /* position: absolute;
  left: 165px;
  top: 234px; */
  margin: 100px 0 100px 0;
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

const ItemImg = styled.img`
  width: 70%;
  margin: 0 auto;
  /* border: 1px solid red; */
`;

const TitleBox = styled.div``;

const DescriptText = styled.p`
  color: var(--gray-900, #15191d);
  /* H3 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
`;

const LeftBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`;

const RightBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const LineBox = styled.div`
  display: flex;
  margin-top: 92px;
  margin-bottom: 33px;
  justify-content: space-between;
`;
