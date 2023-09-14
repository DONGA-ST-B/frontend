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
              아마존클라우드서비스(AWS)웹에서 가동되는 소프트웨어로, 별도의
              프로그램을 설치할 필요가 없습니다.
            </DescriptText>
          </RightBox>
        </LineBox>
        <ItemImg src={monitor} alt="monitor" />
        <LineBox>
          {" "}
          <LeftBox>
            <img src={blue_circle} alt="" />
            <DescriptText>
              환자상태에 따라, 이벤트 알림을 개별 설정할 수 있어 효율적인 환자별
              맞춤 관리가 가능합니다.
            </DescriptText>
          </LeftBox>
          <RightBox>
            <img src={blue_circle} alt="" />
            <DescriptText>
              의료진이 실시간으로 최대 128명 환자의 상태를 동시에 모니터링 할 수
              있습니다.
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
  /* border: 1px solid red; */
`;

const LeftBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  /* border: 1px solid red; */
  width: 460px;
  text-align: right;
`;

const RightBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  /* border: 1px solid blue; */
  width: 460px;
  text-align: left;
`;

const LineBox = styled.div`
  display: flex;
  margin-top: 72px;
  margin-bottom: 36px;
  justify-content: space-between;
  /* border: 1px solid black; */
`;
