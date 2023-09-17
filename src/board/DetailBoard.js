import React from "react";
import styled from "styled-components";

export default function DetailBoard() {
  return (
    <WindowBox>
      <Container>
        <BoardTab>
          <TabText>공지사항</TabText>
          <TabText>|</TabText>
          <TabText>이벤트</TabText>
          <TabText>|</TabText>
          <TabText>FAQ</TabText>
          <TabText>|</TabText>
          <TabText>1:1 문의</TabText>
        </BoardTab>
        <TabBoard>
          {" "}
          <TabTitle>공지사항</TabTitle>
          <Line></Line>
          <SecondMenu>
            <div>번호</div>
            <div style={{ marginLeft: "261px" }}>제목</div>
            <div style={{ marginLeft: "500px" }}>작성일</div>
            <div style={{ marginLeft: "92px" }}>조회</div>
          </SecondMenu>
          <Line></Line>
          <EmptyText>검색결과가 없습니다.</EmptyText>
          <Line></Line>
        </TabBoard>
      </Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  /* background-color: #1aabde; */
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  text-align: center;
`;

const BoardTab = styled.div`
  display: inline-flex;
  /* align-items: center; */
  gap: 21px;
  /* border: 1px solid red; */
  width: 60%;
  margin: 100px;
`;

const TabText = styled.div`
  /* color: var(--blue, #18afdd); */

  /* B2 b */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;

const TabTitle = styled.div`
  color: var(--gray-900, #15191d);

  /* H3_B */
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
  display: flex;
  justify-content: flex-start;
`;

const TabBoard = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 60%;
  flex-direction: column;
`;

const Line = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #666b6f;
`;

const BottomLine = styled.div`
  margin-top: 25px;
  border-bottom: gray;
  width: 100%;
`;

const SecondMenu = styled.div`
  display: flex;
  flex-direction: row;

  color: var(--gray-900, #15191d);

  /* B3 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.084px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const EmptyText = styled.div`
  color: var(--gray-600, #666b6f);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
  margin: 100px 0px;
`;
