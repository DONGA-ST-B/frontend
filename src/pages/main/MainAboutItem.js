import React from "react";
import { COLORS } from "../../styles/colors";
import styled from "styled-components";

const containerStyle = {
  width: "22%",
  // height: "605px",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  // border: "1px solid blue",
};

const imageStyle = {
  // width: "400px",
  // height: "400px",
  borderRadius: "20px",
  marginBottom: "48px",
  objectFit: "cover",
  boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.13)",
};

const titleStyle = {
  color: COLORS.GRAY_900,
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "24px",

  color: "var(--gray-900, #15191D)",

  /* H1_B */
  fontFamily: "Pretendard",
  lineHeight: "160%" /* 44.8px */,
};

const contentStyle = {
  color: COLORS.GRAY_600,
  fontSize: "16px",
};

const MainAboutItem = ({ image, title, content }) => {
  return (
    <div style={containerStyle}>
      <img src={image} alt="Item" style={imageStyle} />
      <h1 style={titleStyle}>{title}</h1>
      <ContentText>{content}</ContentText>
    </div>
  );
};

const ContentText = styled.div`
  color: var(--gray-600, #666b6f);

  /* B1 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 28.8px */
  letter-spacing: 0.072px;
`;

export default MainAboutItem;
