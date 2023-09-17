import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import axios from "axios";
import Header from "../components/header/Header";
import { useLocation } from "react-router-dom";

const ArticleSearch = () => {
  const loc = useLocation();
  console.log("loc.state:", loc.state);

  const articleData = loc.state;

  return (
    <ProductContainer>
      <TopBar />
      <SearchItemContainer>
        {articleData &&
          articleData.map((item, index) => (
            <SearchItem key={index}>
              <ItemImgBox>
                {" "}
                <ItemImg src={item.imageURL} />
              </ItemImgBox>
              <ItemTextBox>
                {" "}
                <ItemTitle>{item.title}</ItemTitle>
                <ItemContent>{item.content}</ItemContent>
              </ItemTextBox>
            </SearchItem>
          ))}
      </SearchItemContainer>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* height: 100vh; */
  padding: 100px;
  gap: 60px;
`;

const SearchItemContainer = styled.div`
  /* border: 1px solid blue; */
  width: 70%;
  /* height: 120px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  gap: 50px;
`;

const SearchItem = styled.div`
  /* border: 1px solid red; */
  /* width: 100%; */
  gap: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemImg = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
`;

const ItemImgBox = styled.div`
  /* border: 1px solid blue; */
`;

const ItemTextBox = styled.div`
  display: flex;
  width: 486px;
  /* width: 80%; */
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  /* border: 1px solid green; */

  //

  flex-shrink: 0;
`;

const ItemTitle = styled.div`
  color: var(--gray-900, #15191d);

  /* H3_B */
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
`;

const ItemContent = styled.div`
  color: var(--gray-500, #8e9398);

  /* B2 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;

const ItemPrice = styled.div`
  color: var(--gray-900, #15191d);

  /* H3_B */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
`;

const SearchInputBox = styled.div`
  border: 1px solid black;
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

export default ArticleSearch;
