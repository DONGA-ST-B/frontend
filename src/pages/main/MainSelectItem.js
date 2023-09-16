import React from "react";
import { COLORS } from "../../styles/colors";

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
  width: "180px", // 이미지 넓이 120px로 설정
  height: "46px", // 이미지 높이 120px로 설정
};

const imageStyle2 = {
  position: "absolute",
  top: "60px", // 이미지의 위치를 조정
  left: "40px", // 좌측 여백 40px
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
  marginTop: "180px",
};

const titleStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  color: COLORS.GRAY_900,
  marginBottom: "40px", // title과 content 사이 간격 설정
};

const contentStyle = {
  fontSize: "18px",
  color: COLORS.GRAY_700,
  marginBottom: "40px", // title과 content 사이 간격 설정
};

const MainSelectItem = ({ why, content, title, image }) => {
  return (
    <div style={{ ...itemStyle, ...(why ? style1 : style2) }}>
      {why ? (
        <>
          {image && <img src={image} alt="Item" style={imageStyle1} />}
          <div style={{ position: "absolute", bottom: "60px", left: "40px" }}>
            왜 하이카디를
            <br />
            선택해야 하나요?
          </div>
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

export default MainSelectItem;
