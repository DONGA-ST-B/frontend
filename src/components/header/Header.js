import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/hicardi_logo.png";

export default function Header() {
  return (
    <HeaderBox>
      <LeftBox>
        <a href="/">
          {" "}
          <img src={logo} alt="Hicardi" width="130px" />
        </a>

        <MenuText>
          <TextContent>서비스 소개</TextContent>
          <TextContent>구매하기</TextContent>
          <TextContent>FAQ</TextContent>
          <TextContent>게시판</TextContent>
        </MenuText>
      </LeftBox>

      <RightBox>
        <MenuText>
          <TextContent>검색</TextContent>
          <TextContent>로그인</TextContent>
          <TextContent>회원가입</TextContent>
        </MenuText>
      </RightBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  /* border: 2px solid red; */
  width: 80%;
  height: 83px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const LeftBox = styled.div`
  /* border: 2px solid blue; */
  display: flex;
`;

const RightBox = styled.div`
  /* border: 2px solid blue; */
  display: flex;
`;

const MenuText = styled.div`
  /* border: 1px solid black; */
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 10px;
`;

const TextContent = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
