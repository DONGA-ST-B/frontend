import React from "react";
import { COLORS } from "../../styles/colors";
import styled from "styled-components";

const itemStyle = {
  width: "500px",
  height: "450px",
  borderRadius: "30px",
  border: `2px solid ${COLORS.GRAY_200}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  position: "relative", // 부모 요소로부터의 상대 위치 설정
};

const imageStyle1 = {
  position: "absolute",
  top: "60px", // 이미지의 위치를 조정
  left: "40px", // 좌측 여백 40px
  right: "40px",
  width: "180px", // 이미지 넓이 120px로 설정
  height: "46px", // 이미지 높이 120px로 설정
};

const imageStyle2 = {
  position: "absolute",
  top: "60px", // 이미지의 위치를 조정
  left: "40px", // 좌측 여백 40px
  right: "40px",
  width: "90px", // 이미지 넓이 120px로 설정
  height: "90px", // 이미지 높이 120px로 설정
};

const style1 = {
  background: COLORS.GRAY_50,
  marginBottom: "60px",
  fontSize: "36px",
  fontWeight: "bold",
  color: COLORS.GRAY_900,
};

const style2 = {
  background: COLORS.WHITE,
  marginBottom: "60px", // 여백을 0px로 설정
  position: "relative", // 부모 요소로부터의 상대 위치 설정
};

const textContainerStyle = {
  position: "absolute",
  left: "40px",
  top: "180px", // 수정: marginTop 대신 top 사용
  bottom: "40px", // 수정: marginTop 대신 bottom 사용
  right: "40px", // 수정: paddingRight 대신 right 사용
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  color: "var(--gray-900, #15191D)",
  fontFamily: "Pretendard",
  fontSize: "32px",
  fontStyle: "normal",
  lineHeight: "90%",
};

const titleStyle = {
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: COLORS.GRAY_900,
  marginBottom: "20px", // 수정: marginBottom 조정
};

const contentStyle = {
  // display: "flex",
  fontSize: "18px",
  // color: COLORS.GRAY_700,
  color: "gray",
  // color: "var(--gray-700, #53575C)",
  marginBottom: "20px", // 수정: marginBottom 조정
};

const MainSelectItem = ({ why, content, title, image }) => {
  return (
    <div style={{ ...itemStyle, ...(why ? style1 : style2) }}>
      {why ? (
        <>
          {image && <img src={image} alt="Item" style={imageStyle1} />}
          <TextStyled>
            왜 하이카디를
            <br />
            선택해야 하나요?
          </TextStyled>
        </>
      ) : (
        <>
          {image && <img src={image} alt="Item" style={imageStyle2} />}
          <div style={textContainerStyle}>
            <div style={titleStyle}>{title}</div>
            <div style={contentStyle}>{content}</div>
          </div>
        </>
      )}
    </div>
  );
};

const TextStyled = styled.div`
  position: absolute;
  bottom: 50px;
  left: 40px;
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 57.6px */
  /* gap: 30px; */
`;

export default MainSelectItem;
