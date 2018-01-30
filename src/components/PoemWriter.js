import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      isVisible: true
    };
  }

  handlePoemUpdate = async (e) => {
    e.persist()
    this.setState({
      poem: e.target.value
    })
    this.validatePoem(e)
  }

  validatePoem = (e) => {
    const poemArr = e.target.value.split("\n")
    if (poemArr.length === 3 && poemArr[0].match(/([\s])/g).length === 4 && poemArr[1].match(/([\s])/g).length === 2 && poemArr[2].match(/([\s])/g).length === 4  ) {
      this.setState({
        isVisible: false
      })
    } else {
      this.setState({
        isVisible: true
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoemUpdate} />
        {this.state.isVisible && <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
