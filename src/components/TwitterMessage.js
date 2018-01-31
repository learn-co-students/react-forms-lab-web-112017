import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      maxChars: this.state.maxChars-1
    });
    //doesn't work if you erase characters
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.message}
          onChange={this.handleChange}
          type="text"
          />
        <p>{this.state.maxChars} characters remaining...</p>
      </div>
    );
  }
}

export default TwitterMessage;
