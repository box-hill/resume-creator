import React, { Component } from "react";
// import uniqid from "uniqid";


class InputForm extends Component {
    constructor(props) {
      super(props);
    } 

    render() {
      const { handleChange, name } = this.props;
  
      return (
        <div>
            <form>
                <label htmlFor="nameInput">Name: </label>
                <input onChange={() => handleChange}
                value={name}
                type="text" id="nameInput"/>
                <button type="submit">Add Task</button>
            </form>
        </div>
      )
    }
  }

  
  
  export default InputForm;
  