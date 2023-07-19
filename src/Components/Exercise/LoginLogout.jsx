import { Component } from "react";

class LoginLogout extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoggin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      return (
        <div>
          <h1>Welcome</h1>
          <button onClick={this.handleLogout}>Log out</button>
        </div>
      );
    }
    return (
      <div>
        <h1>Please Log in</h1>
        <button onClick={this.handleLoggin}>Log in</button>
      </div>
    );
  }
}

export default LoginLogout;
