import './App.css';
import React, { Component } from "react";
import PreviewResume from "./components/PreviewResume";
import InputForm from "./components/InputForm";


class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      phoneNum: '',
      emailAdd: '',
      education: [
          {
              institution: '',
              yearStart: 0,
              yearEnd: 0,
          },
      ],
      skills: '',// gona use uniqid for this
    };  
    this.onSubmitResume = this.onSubmitResume.bind(this);
  }

  onChangeHandler = (field, value) => {
    console.log('calle dme');
    this.setState({
      [field]: value,
    });
  }

  onSubmitResume = (e) => {
    // make a pdf of the resume
    e.preventDefault();
  }


  render() {
    const { onChangeHandler, onSubmitResume } = this;
    const { firstName } = this.state;

    return (
      <div className="body">
        <header>Header</header>
        <div className="container">
          <InputForm onChange={onChangeHandler.bind(this)} />
          <PreviewResume {...this.state}/>
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
