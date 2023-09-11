import React from "react";
import styled from "styled-components";
import itemImg from "../../assets/holter_item.png";

export default function Part2() {
  return (
    <TextContainer>
      <div>
        <div>
          {" "}
          <MiddleText>HiCardi SmartPatch</MiddleText>
          <TextTitle>웨어러블 스마트 패치</TextTitle>
        </div>{" "}
        <div>
          <PatchBox>
            {/* <div>아이콘</div> */}
            <PatchText>
              {" "}
              <h4>정확한 분석</h4>
              <TextDescrip>
                Wireless device로 선으로 인한 노이즈를 제거하여 데이터 품질 개선
                및 분석의 정확성을 제공합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            {/* <div>아이콘</div> */}
            <PatchText>
              {" "}
              <h4>간편한 구동</h4>
              <TextDescrip>
                웹 기반으로 간편하게 구동되는 업무 환경을 제공하며 이해하기 쉬운
                직관적인 인터페이스로 진행 상황을 안내합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            {/* <div>아이콘</div> */}
            <PatchText>
              {" "}
              <h4>생활 방수 가능</h4>
              <TextDescrip>
                IP67 방수 등급을 받아, 샤워 등 일상 생활시에도 지속적인 ECG
                측정이 가능합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
        </div>
      </div>
      <ItemImg src={itemImg} alt="itemImg" />
    </TextContainer>
  );
}

const TextContainer = styled.div`
  /* width: 75%; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  /* gap: 20px; */
  /* position: absolute;
  left: 165px;
  top: 234px; */
  /* margin: 0 auto; */
  margin: 200px;
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
  color: var(--gray-500, #8e9398);
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
  width: 80%;
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  /* padding: 20px; */
  /* border: 1px solid black; */
`;

const PatchText = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid pink; */
`;

const ItemImg = styled.img`
  width: 50%;
  /* border: 1px solid black; */
  justify-content: center;
`;
