import './App.css';
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import uniqid from "uniqid";

import PreviewResume from "./components/PreviewResume";
import UserPersonalInfo from "./components/UserPersonalInfo";
import UserSkills from "./components/UserSkills.js";


class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      phoneNum: '',
      emailAdd: '',
      githubLink: '',
      portfolioLink: '',
      education: [
          {
              institution: '',
              yearStart: 0,
              yearEnd: 0,
          },
      ],
      skill: {
        text: '',
        id: uniqid()
      },
      skills: [],
    };  
    this.removeHandler = this.removeHandler.bind(this)
  }

  onChangeHandler = (field, value) => {
    
    this.setState({
      [field]: value,
    });
  }

  onSkillsChangeHandler = (value) => {
    console.log('calle dme');
    this.setState({
      skill : {
        text: value,
        id: this.state.skill.id,
      }
    });
  }

  onAddSkill = () => {
    this.setState(
      {
        skills: this.state.skills.concat(this.state.skill),
        skill: { text: '', 
                id: uniqid(),
              },
      });
  }

  // remove selected skills from array
  removeHandler = (id) => {
    this.setState({
      skills: this.state.skills.filter((skill) => skill.id!==id),
    })
  }

  render() {
    const { onChangeHandler, onSkillsChangeHandler, onAddSkill } = this;
    const {  } = this.state;

    return (
      <div className="body">
        <header>Header</header>
        <div className="container">
          <UserPersonalInfo onChange={onChangeHandler.bind(this)} />
          <UserSkills 
            onChange={onSkillsChangeHandler.bind(this)} 
            onSubmit={onAddSkill.bind(this)}
            {...this.state} 
            handler={this.removeHandler}
          />
          <ReactToPrint trigger={() => {
            return <a href="#">Print this out!</a>
            }}
            content={() => this.componentRef}
          />
          <PreviewResume 
            ref={el => (this.componentRef = el)} 
            {...this.state}
          />

          
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
