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

      <RightBox>
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
                스마트 패치에서 전달된 생리학적 데이터를 서버로 전달하는게이트
                웨이 기능을 수행합니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
          <PatchBox>
            <CheckIcon style={{ color: "#18AFDD" }} />
            <PatchText>
              {" "}
              <TextDescrip>
                앱 스토어에서 누구나 쉽게 다운로드 받아서 사용할 수 있습니다.
              </TextDescrip>
            </PatchText>
          </PatchBox>
        </div>
      </RightBox>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  width: 70%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
  /* gap: 20px; */
  /* position: absolute;
  left: 165px;
  top: 234px; */
  gap: 160px;
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
  font-size: 1.1rem;
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
  width: 98%;
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
  width: 90%;
  /* display: flex;
  justify-content: center; */
  /* border: 1px solid red; */
`;
const RightBox = styled.div``;
