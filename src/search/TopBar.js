import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const TopBar = () => {
  const [keyword, setKeyword] = useState("");
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const handleSearch = () => {
    axios
      .post("https://www.kusitms28.shop/api/search/Product", {
        keyword: keyword,
      })
      .then((res) => {
        console.log("res.data:", res.data);
        setProduct(res.data);
        console.log("product:", product);

        navigate("/search", { state: res.data });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const [text, setText] = useState("");
  const [article, setArticle] = useState([]);

  const handleSearchArticle = () => {
    axios
      .post("https://www.kusitms28.shop/api/search/Article", {
        keyword: text,
      })
      .then((res) => {
        console.log("res.data:", res.data);
        setArticle(res.data);
        console.log("product:", article);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const handleTabClick = () => {
    handleSearchArticle(); // 기사 데이터 가져오기
    navigate("/search/article");
  };

  const [activeTab, setActiveTab] = useState("product"); // 기본값은 "product"

  return (
    <TopBox>
      <WhiteButton>
        <SearchInputField
          type="text"
          placeholder="찾으시는 제품명 혹은 기사를 입력해주세요."
          value={keyword}
          onChange={(e) => {
            console.log(keyword);
            setKeyword(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Search onClick={handleSearch} />
      </WhiteButton>
      <MenuTabBox>
        {" "}
        <MenuTab
          onClick={() => setActiveTab("product")} // 제품을 클릭하면 activeTab을 "product"로 설정
          active={activeTab === "product"} // activeTab이 "product"인 경우 true, 아닌 경우 false
        >
          <NavLink
            to="/search"
            type="button"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              borderBottom:
                activeTab === "product"
                  ? "2px solid var(--blue, #18afdd)"
                  : "none", // activeTab에 따라 배경색 변경
            }}
          >
            제품
          </NavLink>
        </MenuTab>{" "}
        <MenuTab
          onClick={() => setActiveTab("article")} // 기사를 클릭하면 activeTab을 "article"로 설정
          active={activeTab === "article"} // activeTab이 "article"인 경우 true, 아닌 경우 false
        >
          <NavLink
            to="/search/article"
            type="button"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              borderBottom:
                activeTab === "article"
                  ? "2px solid var(--blue, #18afdd)"
                  : "none", // activeTab에 따라 배경색 변경
            }}
          >
            기사
          </NavLink>
        </MenuTab>
      </MenuTabBox>
    </TopBox>
  );
};

const TopBox = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 200px;
  margin: 0 auto;
  gap: 57px;
`;

const SearchInputField = styled.input`
  border: none;
  /* border: 1px solid red; */
  outline: none;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  color: var(--gray-400, #aeb3b8);

  //
  color: var(--gray-900, #15191d);
  text-align: left;

  /* H3 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
`;

const WhiteButton = styled.div`
  display: flex;
  width: 70%;
  height: 40px;
  padding: 15px 24px;
  align-items: center;
  gap: 108px;

  border-radius: 40px;
  /* border: 1px solid var(--gray-100, #edf1f7); */
  border: 1px solid var(--gray-100, #d3d3d3);

  justify-content: space-around;
  margin: 0 auto;
`;

const MenuTabBox = styled.div`
  /* border: 1px solid red; */

  //
  display: flex;

  /* width: 200px; */
  /* width: 380px; */
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuTab = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* border-bottom: 2px solid var(--blue, #18afdd); */
  color: var(--gray-900, #15191d);
  text-align: center;
  text-decoration: none;
  color: black;
  /* B2 b */
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;

export default TopBar;
