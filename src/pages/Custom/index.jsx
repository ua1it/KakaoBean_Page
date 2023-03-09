import React from "react";
import { Container, Button, Header } from "./styles";

const imgArr = [
  "gif/tree01.png",
  "gif/tree02.png",
  "gif/tree03.png",
  "gif/tree04.png",
  "gif/tree05.png",
  "gif/tree06.png",
  "gif/tree07.png",
  "gif/tree08.png",
  "gif/tree09.png",
  "gif/tree10.png",
  "gif/tree11.png",
  "gif/tree12.png",
  "gif/tree13.png",
  "gif/tree14.png",
  "gif/tree15.png",
  "gif/tree16.png",
  "gif/tree17.png",
  "gif/tree18.png",
];

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      imgUrl: imgArr[0],
    };
  }

  growTree = () => {
    if (this.state.idx < 17) {
      this.setStates();
    }
  };

  setStates = () => {
    this.setState((state) => ({ idx: state.idx + 1 }));
    this.setState((state) => ({ imgUrl: imgArr[state.idx] }));
  };

  reset = () => {
    this.setState((state) => ({ idx: 0 }));
    this.setState((state) => ({ imgUrl: imgArr[0] }));
  };

  render() {
    return (
      <Container>
        <Header>카카오 빈 나무를 클릭보세요!!</Header>
        <div onClick={this.growTree}>
          <img src={this.state.imgUrl} width="960" height="540" />
        </div>
        <Button type="button" onClick={this.reset}>
          Reset
        </Button>
      </Container>
    );
  }
}

export default Tree;
