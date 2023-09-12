import React from "react";
import table_img from "../../assets/Table.png";
import styled from "styled-components";

export default function Part8() {
  return (
    <WindowBox>
      <Container>
        <TextBox>
          2022년 2월 <BlueText> 홀터검사</BlueText>
        </TextBox>
        <TextBox>
          <b>보험급여</b>가 확대되었습니다.
        </TextBox>
        <TableImg src={table_img} alt="" />
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  background-color: #1aabde;
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* margin: 300px 0 300px 0; */
  padding-top: 70px;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.6px;
  /* border: 1px solid white; */
`;

const BlueText = styled.div`
  color: #22439a;
  font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.6px;
  margin-left: 18px;
`;

const TableImg = styled.img`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 100px 0 100px 0;
`;
