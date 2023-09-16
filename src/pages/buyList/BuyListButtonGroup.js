import React, { Component } from "react";
import PropTypes from "prop-types";

class BuyListButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: "전체",
    };
  }

  handleButtonClick = (buttonLabel) => {
    this.setState({ selectedButton: buttonLabel });

    let category;
    switch (buttonLabel) {
      case "전체":
        category = "TOTAL";
        break;
      case "기기 본체":
        category = "STANDARD";
        break;
      case "추가 용품":
        category = "PLUS";
        break;
      case "추가 서비스":
        category = "PLUSSERVICE";
        break;
      default:
        category = "TOTAL"; 
    }

    this.props.onCategoryChange(category);
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

BuyListButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryChange: PropTypes.func.isRequired, 
};

const styles = {
  buttonGroup: {
    display: "flex",
    gap: "8px",
    marginLeft: "20vw",
  },
  button: {
    padding: "8px 16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "40px",
  },
};

export default BuyListButtonGroup;
