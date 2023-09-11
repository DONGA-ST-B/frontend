import React from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/hicardi_logo.png";
import { Search } from "@mui/icons-material";

export default function Header() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate("/login");
  };


  return (
    <HeaderBox>
      <LeftBox>
        <MenuText>
          <Link to="/">
            <img src={logo} alt="Hicardi" width="130px" />
            </Link>
            <a>
          </a>
          <TextContent>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              서비스 소개
            </Link>
            <SubMenu>
              <Link to="/monitoring-solution" className="sub-li">
                환자모니터링 솔루션
              </Link>
              <Link to="/holter-solution" className="sub-li">
                홀터 솔루션
              </Link>
            </SubMenu>
          </TextContent>
          <TextContent>구매하기</TextContent>
          <TextContent>FAQ</TextContent>
          <TextContent>게시판</TextContent>
        </MenuText>
      </LeftBox>

      <RightBox>
        <MenuText>
          <WhiteButton>
            <Search style={{ height: "17px" }} />
          </WhiteButton>
          <WhiteButton onClick={handleLoginClick}>로그인</WhiteButton>
          <SkyButton>회원가입</SkyButton>
        </MenuText>
      </RightBox>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  /* border: 2px solid red; */
  width: 80%;
  height: 7vh;
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
  font-size: 13px;
  font-weight: bold;
  margin: 10px;
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
  display: flex;
  justify-content: center;
  margin-left: 7px;
  margin-right: 7px;
  /* width: 100%; */

  &:hover {
    cursor: pointer;
  }
`;


const SubMenu = styled.ul`
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  width: 130px;
  display: none; /* 초기에는 숨깁니다. */
  position: absolute;
  background-color: white;
  z-index: 1;

  /* 이하 스타일은 필요에 따라 조정하세요. */
  padding: 10px;
  list-style: none;
  margin: 0;
  top: 100%; /* 부모 요소 아래에 위치하도록 설정합니다. */
  left: 0;
`;

const TextContent = styled.li`
  margin-left: 15px;
  margin-right: 15px;
  list-style: none;
  padding: 5px;
  position: relative; /* 부모 요소로부터 상대 위치로 설정합니다. */

  /* hover 시 SubMenu를 보이도록 설정합니다. */
  &:hover ${SubMenu} {
    display: block;
  }
`;
