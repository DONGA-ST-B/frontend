import React, { useState } from "react";
import { COLORS } from "../../styles/colors";
import ArrowDown from "../../assets/ArrowDown.png";

const ProductOption = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const optionStyle = {
    position: "relative",
    borderRadius: "27.5px",
    width: "100%",
    height: "64px",
    border: "1px solid #E0E0E0",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    marginRight: "16px", 
  };

  const textStyle = {
    color: COLORS.GRAY_600,
    fontSize: "B1",
  };

  const iconStyle = {
    cursor: "pointer",
    width: "20px",
    height: "20px",
  };

  const menuStyle = {
    position: "absolute", 
    top: "100%", 
    left: "0",
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    display: isMenuOpen ? "block" : "none", 
    zIndex: 1, 
  };

  const menuItemStyle = {
    padding: "10px 20px",
    borderBottom: "1px solid #E0E0E0",
    textAlign: "center",
  };

  const handleOptionClick = () => {
    setIsMenuOpen(!isMenuOpen); // 아이콘 버튼 클릭 시 팝업 메뉴 열고 닫기
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false); // 메뉴 아이템을 선택하면 팝업 메뉴 닫기
  };

  return (
    <div style={optionStyle}>
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
      <div style={menuStyle} className="menu-container">
        <hr style={{ margin: "0" }} />
        <div
          onClick={() => handleMenuItemClick("옵션1")}
          style={menuItemStyle}
        >
          메뉴 1
        </div>
        <div
          onClick={() => handleMenuItemClick("옵션2")}
          style={menuItemStyle}
        >
          메뉴 2
        </div>
      </div>
    </div>
  );
};

export default ProductOption;
