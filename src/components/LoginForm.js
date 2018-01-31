import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormChange = (e) => {
    if (e.target.id === 'test-username') {
      this.setState({
        username: e.target.value
      })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSubmit = () => {
    this.props.onSubmit({username: this.state.username, password: this.state.password})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleFormChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handleFormChange}
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
