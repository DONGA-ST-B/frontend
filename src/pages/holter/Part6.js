import React from "react";
import data1 from "../../assets/data1.png";
import data2 from "../../assets/data2.png";
import data3 from "../../assets/data3.png";
import data4 from "../../assets/data4.png";
import styled from "styled-components";

export default function Part6() {
  const data_component = [
    {
      title: "정확한 부정맥 진단",
      descript: "장시간 홀터검사를 통해 부정맥 진단율 향상",
      img: data1,
    },
    {
      title: "전문의 서비스 제공",
      descript:
        "부정맥 전문의의 원격판독 서비스 제공하여 임상병리사, 부정맥 진단 지식 필요 없음",
      img: data2,
    },
    {
      title: "방수",
      descript: "방수가 가능하여 샤워할 때 탈착할 번거로움이 없음",
      img: data3,
    },
    {
      title: "편리성",
      descript:
        "무선이고, 일체형이므로 부착이 쉽고, 작고 가벼워서 일상생활이 편리",
      img: data4,
    },
  ];

  return (
    <WindowBox>
      <Container>
        <GridBox>
          {" "}
          {data_component.map((item, index) => (
            <ComBox key={index}>
              <div>
                <DataImg src={item.img} alt={`data${index + 1}`} />
              </div>
              <DataText>{item.title}</DataText>
              <DataDescript>{item.descript}</DataDescript>
            </ComBox>
          ))}
        </GridBox>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  background-color: white;
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const GridBox = styled.div`
  /* border: 1px solid red; */
  width: 70%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  /* align-items: stretch;  */
`;

const ComBox = styled.div`
  border-radius: 30px;

  flex-shrink: 0;
  background: var(--gray-50, #f4f8fd);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 50px; */
  padding: 30px;
  gap: 20px;
`;

const DataImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const DataText = styled.div`
  color: #000;

  /* H0 */
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 50.4px */
`;

const DataDescript = styled.div`
  color: var(--gray-600, #666b6f);
  text-align: center;

  /* H2 */
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 38.4px */
`;
