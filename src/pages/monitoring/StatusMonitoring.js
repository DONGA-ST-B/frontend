import React from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import phone from "../../assets/phone.png";

export default function StatusMonitoring() {
  return (
    <TextContainer>
      <div>
        {" "}
        <ItemImg src={phone} alt="phone" />
      </div>

      <div>
        <div style={{ marginBottom: "50px" }}>
          {" "}
          <MiddleText>HiCardi SmartView</MiddleText>
          <TextTitle>환자 상태 모니터링</TextTitle>
        </div>

        <div>
          <PatchBox>
            <CheckIcon style={{ color: "#18AFDD" }} />
            <PatchText>
              {" "}
              <TextDescrip>
                모바일 앱으로 언제 어디서나 환자의 실시간 상태를 모니터링할 수
                있습니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            <CheckIcon style={{ color: "#18AFDD" }} />
            <PatchText>
              {" "}
              <TextDescrip>
                작고 컴팩트한 무선 디자인으로 흉부에 간편하게 부착할 수
                있습니다. 특수 소재 전극을 사용해 피부 트러블이 적어 착용 시
                이물감이 적습니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            <CheckIcon style={{ color: "#18AFDD" }} />
            <PatchText>
              {" "}
              <TextDescrip>
                IP67 방수 등급을 받아, 샤워 등 일상 생활시에도 지속적인 ECG
                측정이 가능합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
        </div>
      </div>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 75%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* gap: 20px; */
  /* position: absolute;
  left: 165px;
  top: 234px; */
  gap: 100px;
  margin: 150px 0 150px 0;
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
  width: 80%;
  display: flex;
  align-items: flex-start;
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
  width: 100%;
  /* border: 1px solid red; */
`;
