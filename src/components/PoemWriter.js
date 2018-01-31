import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  handlePoem = (e) => {
    this.setState({
      poem: e.target.value
    })
  }

  poemValid = () => {
    let lines = this.state.poem.split(/\n/)

    console.log(lines)
    console.log((lines[0].match(/ /g) || []).length, lines[0].split(" ").length)

    if (lines.length === 3) {
      if ((lines[0].match(/ /g) || []).length === 4 && lines[0].split(" ").length === 5) {
        if ((lines[1].match(/ /g) || []).length === 2 && lines[1].split(" ").length === 3) {
          if ((lines[2].match(/ /g) || []).length === 4 && lines[2].split(" ").length === 5) {
            return true
          }
        }
      }
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={ this.handlePoem }/>
        <div id="poem-validation-error" style={{ color: "red" }}>
          { this.poemValid() ? null : "This poem is not written in the right structure!"}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
