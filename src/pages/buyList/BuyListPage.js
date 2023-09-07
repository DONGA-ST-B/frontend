import React, { Component } from "react";
import BuyListButton from "../../components/buyList/BuyListButton"; // 컴포넌트의 경로에 맞게 수정하세요

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <div>
        <BuyListButton
          label="버튼"
          onClick={this.handleButtonClick}
          isSelected={this.state.isSelected}
        />
      </div>
    );
  }
}

export default MyComponent;
