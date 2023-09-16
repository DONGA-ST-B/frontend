import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const TopBar = () => {
  //tap

  const [tap1, setTap1] = useState("tap1_true");
  const [tap2, setTap2] = useState("tap2_false");

  const tapBar1 = () => {
    setTap1("tap1_true");
    setTap2("tap2_false");
  };

  const tapBar2 = () => {
    setTap1("tap1_false");
    setTap2("tap2_true");
  };

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
        />
        <Search onClick={handleSearch} />
      </WhiteButton>
      <MenuTapBox>
        <NavLink
          to="/search"
          type="button"
          style={{
            textDecoration: "none",
            borderRadius: "50px",
            marginRight: "20px",
            border: "1px solid red",
          }}
        >
          제품
        </NavLink>
        <NavLink
          to="/search/article"
          border="0px none"
          type="button"
          style={{
            textDecoration: "none",
            borderRadius: "50px",
            marginRight: "20px",
          }}
        >
          기사
        </NavLink>
      </MenuTapBox>
    </TopBox>
  );
};

const TopBox = styled.div`
  border: 1px solid black;
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
  width: 500px;
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

const MenuTapBox = styled.div`
  border: 1px solid red;

  //
  display: flex;
  /* width: 380px; */
  padding: 4px 120px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default TopBar;
