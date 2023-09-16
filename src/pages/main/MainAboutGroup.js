import React from "react";
import styled from "styled-components";
import MainAboutItem from "./MainAboutItem";
import About1 from "../../assets/About1.png";
import About2 from "../../assets/About2.png";
import About3 from "../../assets/About3.png";
import About4 from "../../assets/About4.png";

const MainAboutGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 30px;
  /* border: 1px solid red; */
  width: 100%;
  gap: 40px;
`;

const itemsData = [
  {
    image: About1,
    title: "일반 병동",
    content:
      "모니터링이 필요한 환자에게 스마트 패치를 붙여 놓으면, 언제 어디서나 웹에서 환자 상태를 확인할 수 있습니다. 이를 통해, 의료진의 작업을 줄일 수 있습니다.",
  },
  {
    image: About2,
    title: "만성질환자 관리",
    content:
      "하이카디 시스템은 원격으로 환자의 상태를 모니터링하고 이상이 감지되면 즉시 경보를 울릴 수 있습니다.",
  },
  {
    image: About3,
    title: "격리 병동",
    content:
      "코로나19 환자와 같이 격리병동의 환자를 원격으로 모니터링할 수 있습니다. 의료진의 감염의 위험을 낮출 수 있습니다.",
  },
  {
    image: About4,
    title: "잠재 환자",
    content:
      "위중하지 않은 잠재 환자군의 상태를 집에서 모니터링할 수 있다면, 이상징후를 조기 발견하여 치료할 수 있습니다.",
  },
];

const MainAboutGroup = () => {
  return (
    <MainAboutGroupContainer>
      {itemsData.map((item, index) => (
        <MainAboutItem
          key={index}
          image={item.image}
          title={item.title}
          content={item.content}
        />
      ))}
    </MainAboutGroupContainer>
  );
};

export default MainAboutGroup;
