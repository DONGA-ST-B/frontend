import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomButton extends Component {
  render() {
    const {
      label,
      onClick,
      isSelected,
      borderRadius,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
    } = this.props;

    const buttonStyle = {
      padding: "16px",
      borderRadius: `${borderRadius}px`,
      marginTop: `${marginTop}px`,
      marginBottom: `${marginBottom}px`,
      marginLeft: `${marginLeft}px`,
      marginRight: `${marginRight}px`,
      backgroundColor: isSelected ? "#09B0EE" : "#F4F8FD",
      color: isSelected ? "white" : "#333333",
      border: "none",
      cursor: "pointer",
    };

    return (
      <button style={buttonStyle} onClick={onClick}>
        {label}
      </button>
    );
  }
}

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  borderRadius: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

CustomButton.defaultProps = {
  isSelected: false,
  borderRadius: 40,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
};

export default CustomButton;
