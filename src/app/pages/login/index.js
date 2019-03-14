import React from "react";
import "./index.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  onLogin = () => {
    const { username, password } = this.state;
    const { history } = this.props;

    if (username && password) {
      history.replace("./Favorites");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="Login--form">
          <input
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="Your Irc Nick"
          />
          <input
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Your password"
          />
          <button onClick={this.onLogin} type="button">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
