import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/hicardi_logo.png";

export default function Header() {
  return (
    <HeaderBox>
      <LeftBox>
        <MenuText>
          <a href="/">
            {" "}
            <img src={logo} alt="Hicardi" width="130px" />
          </a>
          <TextContent>서비스 소개</TextContent>
          <TextContent>구매하기</TextContent>
          <TextContent>FAQ</TextContent>
          <TextContent>게시판</TextContent>
        </MenuText>
      </LeftBox>

      <RightBox>
        <MenuText>
          <WhiteButton>검색</WhiteButton>
          <WhiteButton>로그인</WhiteButton>
          <SkyButton>회원가입</SkyButton>
        </MenuText>
      </RightBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  /* border: 2px solid red; */
  width: 80%;
  /* height: 83px; */
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

const MenuText = styled.ul`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 10px;
  padding: 5px;
`;

const TextContent = styled.li`
  margin-left: 15px;
  margin-right: 15px;
  list-style: none;
  padding: 5px;
`;

const SkyButton = styled.div`
  background-color: #01b0ef;
  border-radius: 100px;
  /* border: 1px solid black; */
  padding: 6px 15px 6px 15px;
  color: white;
  margin-left: 7px;
  margin-right: 7px;
`;

const WhiteButton = styled.div`
  border: 1px solid #eee;
  box-sizing: border-box;
  border-radius: 100px;
  background: #fff;
  /* transition: all 0.3s; */
  padding: 6px 15px 6px 15px;
  margin-left: 7px;
  margin-right: 7px;
`;
