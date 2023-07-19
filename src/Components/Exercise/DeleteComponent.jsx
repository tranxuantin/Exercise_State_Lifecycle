import { Component } from "react";
import AddComponent from "./TestClassComponent/AddComponentsTest";

class DeleteTestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  delete = () => {
    this.setState({ display: false });
  };

  render() {
    let comp;
    if (this.state.display) {
      comp = <AddComponent firstNumber={"1"} secondNumber={2} />;
    }

    return (
      <div style={{ marginTop: "20px" }}>
        {comp}
        <button onClick={this.delete}>Delete the component</button>
      </div>
    );
  }
}

export default DeleteTestClass;
