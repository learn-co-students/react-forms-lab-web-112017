import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  changeMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.changeMessage}/>
          <span>
            Remaining Characters: {this.props.maxChars - this.state.message.length}
          </span>
      </div>
    );
  }
}

export default TwitterMessage;
