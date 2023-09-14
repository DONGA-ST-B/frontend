import React from "react";
import styled from "styled-components";
import smartpatch from "../../assets/smartpatch.jpg";

export default function SmartPatch() {
  return (
    <TextContainer>
      <div>
        <MiddleText>HiCardi SmartPatch</MiddleText>
        <TextTitle>웨어러블 스마트 패치</TextTitle>

        <div>
          <PatchBox>
            {/* <div>아이콘</div> */}
            <PatchText>
              {" "}
              <DescriptTitle>정밀한 모니터링</DescriptTitle>
              <TextDescrip>
                HiCardi 시스템의 핵심으로, 부정맥, 심전도, 호흡, 피부온과 같은
                환자의 생리학적 데이터를 실시간으로 측정합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            {/* <div>아이콘</div> */}
            <PatchText>
              {" "}
              <DescriptTitle>손 쉬운 사용</DescriptTitle>
              <TextDescrip>
                작고 컴팩트한 무선 디자인으로 흉부에 간편하게 부착할 수
                있습니다. 특수 소재 전극을 사용해 피부 트러블이 적어 착용 시
                이물감이 적습니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            {/* <div>아이콘</div> */}
            <PatchText>
              {" "}
              <DescriptTitle>생활 방수 가능</DescriptTitle>
              <TextDescrip>
                IP67 방수 등급을 받아, 샤워 등 일상 생활시에도 지속적인 ECG
                측정이 가능합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
        </div>
      </div>
      <ItemImg src={smartpatch} alt="smartpatch" />
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 70%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  align-items: center;
  /* gap: 20px; */
  /* position: absolute;
  left: 165px;
  top: 234px; */

  margin: 100px 0 0 0;
`;

const MiddleText = styled.div`
  color: var(--blue, #18afdd);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
`;

const TextDescrip = styled.div`
  color: var(--gray-500, #8e9398);
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 44.8px */
`;

const DescriptTitle = styled.div`
  color: var(--gray-900, #15191d);
  /* H1_B */
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 44.8px */
`;

const TextTitle = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 64px */
`;

const PatchBox = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  /* gap: 100px; */
  margin-top: 40px;
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
`;
