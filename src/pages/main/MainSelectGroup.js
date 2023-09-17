import React from "react";
import MainSelectItem from "./MainSelectItem";
import Logo from "../../assets/hicardi_logo.png";
import Select1 from "../../assets/Select1.png";
import Select2 from "../../assets/Select2.png";
import Select3 from "../../assets/Select3.png";
import Select4 from "../../assets/Select4.png";
import Select5 from "../../assets/Select5.png";
import styled from "styled-components";

const MainSelectGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px; /* 위 아래 여백 60px, 좌우 여백 반응형 조절 */

  @media (min-width: 1500px) {
    padding: 60px 162px; /* 화면이 768px 이상일 때 좌우 여백 162px로 변경 */
  }
  margin-top: 200px;
  margin-bottom: 200px;
`;

const MainSelectRow = styled.div`
  display: flex;
  flex-direction: column; /* 화면이 작을 때 세로로 쌓이도록 변경 */
  margin-top: 24px; /* 위쪽 여백 24px */
  width: 100%; /* 화면 너비에 따라 컨텐츠 가득 차도록 설정 */
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 48px; /* MainSelectItem 컴포넌트 간격 48px */
  }
`;

const MainSelectGroup = () => {
  return (
    <MainSelectGroupWrapper>
      <MainSelectRow>
        <MainSelectItem why={true} image={Logo} />
        <MainSelectItem
          why={false}
          image={Select1}
          title="높은 방수 등급 (IP67)"
          content={
            <>
              하이카디는 높은 방수 등급 (IP67)을 가진
              <br />
              식약처 및 CE 인증 제품입니다.
              <br />
              간단한 샤워가 가능하여 탈착하지
              <br />
              않으므로 검사의 정확도가 월등합니다.
            </>
          }
        />
        <MainSelectItem
          why={false}
          image={Select2}
          title="선형 모델의 구조적 문제 해결"
          content={
            <>
              선형 모델은 선을 건드릴 경우
              <br />
              노이즈가 발생하여 데이터 정확도가
              <br />
              떨어지거나 탈착 가능성이 높습니다.
              <br />
              하이카디는 일체형 모델이므로
              <br />
              이러한 단점을 보완했습니다.
            </>
          }
        />
      </MainSelectRow>
      <MainSelectRow>
        <MainSelectItem
          why={false}
          image={Select3}
          title="간단한 착용"
          content={
            <>
              18g의 가벼운 무게를 지닌 일체형
              <br />
              모델이므로, 컴팩트하여 누구나 쉽게
              <br />
              착용할 수 있습니다.
            </>
          }
        />
        <MainSelectItem
          why={false}
          image={Select4}
          title="전 연령 사용가능"
          content={
            <>
              하이카디는 소아/신생아용 홀터 진단에서
              <br />
              요구하는 시험결과를 제출해 인증 받은
              <br />
              제품이므로, 소아 및 신생아에게도 사용이
              <br />
              가능합니다.
            </>
          }
        />
        <MainSelectItem
          why={false}
          image={Select5}
          title="제세동기 사용 가능"
          content={
            <>
              Defivirillation Protection 기능이 탑재되어
              <br />
              착용한 상태로 제세동기 사용이 가능합니다.
            </>
          }
        />
      </MainSelectRow>
    </MainSelectGroupWrapper>
  );
};

export default MainSelectGroup;
