import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
import ArrowDown from "../../assets/ArrowDown.png";

const ProductOption = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0); // 초기 메뉴 높이를 0으로 설정

  const optionStyle = {
    position: "relative",
    borderRadius: "27.5px",
    width: "100%",
    minHeight: "64px", // 최소 높이를 설정
    border: "1px solid #E0E0E0",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column", // 세로로 아이템 배치
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    marginRight: "16px",
    overflow: "hidden", // 내용이 넘치면 숨김
    transition: "min-height 0.3s ease", // 애니메이션 속성 추가
  };

  const textStyle = {
    color: COLORS.GRAY_600,
    marginTop: "16px",
    marginBottom: "16px"
  };

  const iconStyle = {
    cursor: "pointer",
    width: "20px",
    height: "20px",
    marginBottom: "16px"
  };

  const menuStyle = {
    width: "100%",
    maxHeight: "500px",
    opacity: isMenuOpen ? 1 : 0,
    overflow: "hidden",
    transition: "max-height 0.3s ease, opacity 0.3s ease",
    zIndex: 1,
  };

  const menuItemStyle = {
    padding: "10px 20px",
    borderBottom: "1px solid #E0E0E0",
    textAlign: "center",
  };

  const handleOptionClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuHeight(menuHeight === 0 ? 500 : 0);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
    setMenuHeight(0); 
  };

  return (
    <div style={{ ...optionStyle, minHeight: isMenuOpen ? "auto" : "64px" }}>
      {selectedOption ? (
        <span>{selectedOption}</span>
      ) : (
        <span style={textStyle}>- [필수] 옵션을 선택해 주세요 -</span>
      )}
      <div onClick={handleOptionClick}>
        <img
          src={ArrowDown}
          alt="Options"
          style={iconStyle}
        />
      </div>
      <div style={{ ...menuStyle, maxHeight: `${menuHeight}px` }}>
        <hr style={{ margin: "0" }} />
        <div
          onClick={() => handleMenuItemClick("선택 안 함")}
          style={menuItemStyle}
        >
          선택 안 함
        </div>
        <div
          onClick={() => handleMenuItemClick("갤럭시 A13 (+275,000원)")}
          style={menuItemStyle}
        >
          갤럭시 A13 (+275,000원)
        </div>
      </div>
    </div>
  );
};

export default ProductOption;
