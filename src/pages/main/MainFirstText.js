import React from "react";
import { COLORS } from "../../styles/colors";

const containerStyle = {
  textAlign: "center",
  marginTop: "32px",
};

const lineStyle = {
  backgroundColor: COLORS.BLUE,
  width: "80px",
  height: "4px",
  margin: "0 auto",
  marginTop: "32px",
  marginBottom: "32px",
};

const textStyle = {
  fontSize: "48px",
  color: "var(--gray-900, #15191D)",
  FontFmaily: "Pretendard",
  fontStyle: "normal",
  lineHeight: "160%",
  letterSpacing: "0.072px",
};

const boldTextStyle = {
  fontWeight: "bold",
};

const MainFirstText = () => {
  return (
    <div style={containerStyle}>
      <div style={lineStyle}></div>
      <p style={textStyle}>
        <span style={{ ...boldTextStyle, ...textStyle }}>하이카디 플러스</span>
        는 이렇게 활용될 수 있습니다
      </p>
    </div>
  );
};

export default MainFirstText;
