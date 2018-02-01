import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

     this.setState({
       [name]: value
     })
  }

  handleSubmit = event => {
    event.preventDefault();
    let { username, password } = this.state
    if (!username || !password) {
      return;
    }
    this.props.onSubmit({ username, password });
}


  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input
            id="test-username"
            name="username"
            type="text"
            value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            name="password"
            id="test-password"
            type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
