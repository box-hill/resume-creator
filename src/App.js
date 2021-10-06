import './App.css';
import React, { Component } from "react";
import PreviewResume from "./components/PreviewResume";
import InputForm from "./components/InputForm";


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      education: [
          {
              institution: '',
              yearStart: 0,
              yearEnd: 0,
          },
      ],
      skills: '',// gona use uniqid for this
    };  
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitResume = this.onSubmitResume.bind(this);
  }

  handleChange = (e) => {
    console.log('calle dme');
    this.setState({
      name: e.target.value
    });
  }

  onSubmitResume = (e) => {
    // make a pdf of the resume
    e.preventDefault();
  }


  render() {
    const { name } = this.state;
    const { handleChange, onSubmitResume } = this;

    return (
      <div className="body">
        <header>Header</header>
        <div className="container">
          <InputForm changeHandler={handleChange} name={name}/>
          <PreviewResume name={name}/>
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
