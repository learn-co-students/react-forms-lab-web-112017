import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value
    })
    this.handleError()
  }

  handleError = () => {
    let poem = this.state.content.split('.');

    if (poem[0].split(' ').length > 4 && poem.length > 3) {
      document.getElementById('poem-validation-error').style.visibility = 'hidden'
    }


      else {
      document.getElementById('poem-validation-error').style.visibility = 'visible'
    }
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleContentChange} rows="3" cols="60" />
        <div id="poem-validation-error" style={{ color: "red" }}>
          <p>This poem is not written in the right structure!</p>
        </div>
      </div>
    );
  }
}

export default PoemWriter;
