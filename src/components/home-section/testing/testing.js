import React from "react";
import { TestingStyled, EarthStyle } from "./testing.style";

const FirstImage = (props) => {
  return (
    <div className="front">
      <TestingStyled src="https://i.ibb.co/zsCKb6K/pixelface2.png" />
    </div>
  );
};

const SecondImage = (props) => {
  return (
    <div className="back">
      <TestingStyled src="https://i.ibb.co/3kN8Zxr/Screenshot-79.png" />
    </div>
  );
};

class MainCoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "front",
    };
  }

  changeDisplay = () => {
    let { display } = this.state;
    this.setState({ display: display === "front" ? "back" : "front" });
  };

  renderInner() {
    let { display } = this.state;

    if (display === "front") {
      return <FirstImage />;
    } else if (display === "back") {
      return <SecondImage />;
    }
  }

  render() {
    return (
      <div className="main-class" onClick={this.changeDisplay}>
        {this.renderInner()}
        <EarthStyle>
          <div className="earth"></div>
        </EarthStyle>
      </div>
    );
  }
}

export default MainCoin;
