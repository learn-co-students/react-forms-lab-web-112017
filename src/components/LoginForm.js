import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={ this.props.onSubmit }>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={ this.state.username } onChange={ this.handleInput }/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={ this.state.password } onChange={ this.handleInput }/>
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
