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
            <img src={logo} alt="Hicardi" width="180px" />
          </Link>

          <TextContent>
            <StyledLink to="/">서비스 소개</StyledLink>
            <SubMenu>
              <SubStyledLink to="/monitoring-solution" className="sub-li">
                환자모니터링 솔루션
              </SubStyledLink>
              <SubStyledLink to="/holter-solution" className="sub-li">
                홀터 솔루션
              </SubStyledLink>
            </SubMenu>
          </TextContent>
          <TextContent>구매하기</TextContent>
          <TextContent>FAQ</TextContent>
          <TextContent>
            <StyledLink to="">게시판</StyledLink>
            <SubMenu>
              <SubStyledLink to="" className="sub-li">
                공지사항
              </SubStyledLink>
              <SubStyledLink to="" className="sub-li">
                이벤트
              </SubStyledLink>{" "}
              <SubStyledLink to="" className="sub-li">
                FAQ
              </SubStyledLink>{" "}
              <SubStyledLink to="" className="sub-li">
                1:1 문의
              </SubStyledLink>
            </SubMenu>
          </TextContent>
        </MenuText>
      </LeftBox>

      <RightBox>
        <MenuText>
          <WhiteButton>
            <StyledInput
              placeholder="찾으시는 제품명을 입력해주세요."
              type="text"
            />
            <Search />
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
  width: 100%;
  height: 113px;
  margin: 0 auto;
  /* margin-top: 10px;
  margin-bottom: 10px; */
  display: flex;

  justify-content: space-between;
`;

const LeftBox = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  margin-left: 50px;
`;

const RightBox = styled.div`
  /* border: 2px solid blue; */
  display: flex;
`;

const MenuText = styled.ul`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px;
  padding: 5px;
`;

const SkyButton = styled.div`
  color: var(--system-white, #fff);
  text-align: center;

  /* B1 b */
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.072px;

  background-color: #01b0ef;
  border-radius: 100px;
  /* border: 1px solid black; */
  padding: 6px 15px 6px 15px;
  color: white;
  margin-left: 7px;
  margin-right: 7px;
`;

const WhiteButton = styled.div`
  color: var(--gray-900, #15191d);
  text-align: center;

  /* B1 b */
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.072px;

  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 100px;
  background: #fff;
  /* transition: all 0.3s; */
  padding: 6px 15px 6px 15px;
  display: flex;
  justify-content: center;
  margin-left: 7px;
  margin-right: 7px;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const SubMenu = styled.ul`
  display: flex;
  flex-direction: column;
  //

  border: 1px solid #d3d3d3;
  border-radius: 0 0px 15px 15px;
  font-size: 1rem;
  font-weight: 500;

  display: none; /* 초기에는 숨깁니다. */
  position: absolute;
  background-color: white;
  z-index: 1;

  /* 이하 스타일은 필요에 따라 조정하세요. */
  padding: 10px;
  list-style: none;
  margin: 0;
  top: 110%; /* 부모 요소 아래에 위치하도록 설정합니다. */
  left: 0;

  text-align: left;
`;

const TextContent = styled.li`
  color: var(--gray-900, #15191d);
  text-align: center;
  /* border: 1px solid red; */
  /* H3_B */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: bolder;
  font-weight: 900;
  line-height: 160%; /* 32px */

  margin-left: 50px;
  /* margin-right: px; */
  list-style: none;
  padding: 5px;
  position: relative; /* 부모 요소로부터 상대 위치로 설정합니다. */
  &:hover {
    color: #18afdd;
    cursor: pointer;
  }

  /* hover 시 SubMenu를 보이도록 설정합니다. */
  &:hover ${SubMenu} {
    color: #18afdd;
    display: inline-block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: ${(props) => props.textDecoration || "none"};
  color: ${(props) => props.color || "inherit"};
`;

const SubStyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  white-space: nowrap;

  &:hover {
    color: #18afdd;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;

  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  color: var(--gray-400, #aeb3b8);

  /* B2 */
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;
