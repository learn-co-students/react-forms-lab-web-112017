import React from "react";

const isPoemCorrectForm = poem => {
      let poemString = poem.trim()
      let poemArray = poemString.split(/\r?\n/)
      if (poemString && poemArray.length === 3) {
        let line1 = poemArray[0].trim().split(" ")
        let line2 = poemArray[1].trim().split(" ")
        let line3 = poemArray[2].trim().split(" ")
            return (
              line1.length === 5 &&
              line2.length === 3 &&
              line3.length === 5)
           } else {
             return false
           }
         }


class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      poem: '',
      isCorrectForm: true,
    };
  }

  handleInputChange = event => {
    const value = event.target.value;

     this.setState({
       poem: value,
       isCorrectForm: isPoemCorrectForm(value)
     })

  }

  render() {
    return (
      <div>
        <textarea
        rows="3"
        cols="60"
        value={this.state.poem} onChange={this.handleInputChange} />
         {!this.state.isCorrectForm ? (
        <div id="poem-validation-error" style={{ color: "red"}}>
          This poem is not written in the right structure!
        </div>) : null }
      </div>
    );
  }
}

export default PoemWriter;
