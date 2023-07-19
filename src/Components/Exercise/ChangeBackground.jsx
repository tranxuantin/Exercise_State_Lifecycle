import { Component } from "react";

class ChangeBackgroud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "pink" });
    }, 8000);
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.color,
            marginTop: 20,
            width: 100,
            height: 20,
            color: "White",
            textAlign: "center",
          }}
        >
          Background
        </div>
      </>
    );
  }
}

export default ChangeBackgroud;
