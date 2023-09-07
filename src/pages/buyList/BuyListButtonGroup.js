import React, { Component } from "react";
import PropTypes from "prop-types";

class BuyListButtonGroup extends Component {
  constructor(props) {
    super(props);
    // 초기 상태 설정
    this.state = {
      selectedButton: "전체",
    };
  }

  // 버튼 클릭 이벤트 핸들러
  handleButtonClick = (buttonLabel) => {
    this.setState({ selectedButton: buttonLabel });
  };

  render() {
    const { selectedButton } = this.state;
    const { buttons } = this.props;

    return (
      <div style={styles.buttonGroup}>
        {buttons.map((buttonLabel) => (
          <button
            key={buttonLabel}
            onClick={() => this.handleButtonClick(buttonLabel)}
            style={{
              ...styles.button,
              backgroundColor:
                selectedButton === buttonLabel ? "#09B0EE" : "#F4F8FD",
              color: selectedButton === buttonLabel ? "white" : "#333333",
            }}
          >
            {buttonLabel}
          </button>
        ))}
      </div>
    );
  }
}

// 프로퍼티 유형 및 필수 여부 지정
BuyListButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// 스타일 객체 정의
const styles = {
  buttonGroup: {
    display: "flex",
    gap: "8px",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "40px",
  },
};

export default BuyListButtonGroup;
