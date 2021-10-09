import './App.css';
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import uniqid from "uniqid";

import PreviewResume from "./components/PreviewResume";
import UserPersonalInfo from "./components/UserPersonalInfo";
import UserListInput from "./components/UserListInput.js";
import UserEducationInfo from "./components/UserEducationInfo.js";
import UserExperienceInfo from "./components/UserExperienceInfo.js";


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

      //education
      degree: '',
      institution: '',
      educationStart: '',
      educationEnd: '',
      idEducation: uniqid(),
      education: [],

      //work
      company: '',
      jobTitle: '',
      workStart: '',
      workEnd: '',
      idWork: uniqid(),
      workDes: '',
      work: [],

      skill: {
        text: '',
        id: uniqid()
      },
      skills: [],
      award: {
        text: '',
        id: uniqid()
      },
      awards: [],
    };  
    this.removeHandler = this.removeHandler.bind(this)
  }

  onChangeHandler = (field, value) => {
    
    this.setState({
      [field]: value,
    });
  }

  onListChangeHandler = (field, value) => {
    this.setState({
      [field] : {
        text: value,
        id: this.state[field].id,
      }
    });
  }

  onAddItemHandler = (field) => {
    const fieldPlural = field + 's';
    this.setState(
      {
        [fieldPlural]: this.state[fieldPlural].concat(this.state[field]),
        [field]: { text: '', 
                id: uniqid(),
              },
      });
  }

  onAddEducationHandler = () => {
    let obj = {
      degree: this.state.degree,
      institution: this.state.institution,
      educationStart: this.state.educationStart,
      educationEnd: this.state.educationEnd,
      idEducation: this.state.idEducation,
    }
    console.log(obj);
    this.setState(
      {
        education: this.state.education.concat(obj),
        degree: '',
        institution: '',
        educationStart: '',
        educationEnd: '',
        idEducation: uniqid(),
      });
    console.log(this.state.education);
  }

  onAddWorkHandler = () => {
    let obj = {
      company: this.state.company,
      jobTitle: this.state.jobTitle,
      workStart: this.state.workStart,
      workEnd: this.state.workEnd,
      workDes: this.state.workDes,
      idWork: this.state.idWork,
    }
    this.setState(
      {
        work: this.state.work.concat(obj),
        company: '',
        jobTitle: '',
        workStart: '',
        workEnd: '',
        workDes: '',
        idWork: '',
      });

      console.log(this.state.work);
  }




  // remove selected skills from array
  removeHandler = (id, field) => {
    const fieldPlural = field + 's';
    this.setState({
      [fieldPlural]: this.state[fieldPlural].filter((field) => field.id!==id),
    })
  }

  render() {
    const { onChangeHandler, onListChangeHandler, onAddItemHandler, onAddEducationHandler,
      onAddWorkHandler,  
       } = this;
    const {  } = this.state;

    return (
      <div className="body">
        <header>Header</header>
        <div className="container">
          <UserPersonalInfo onChange={onChangeHandler.bind(this)} />
          <UserListInput 
            onChange={onListChangeHandler.bind(this)} 
            onSubmit={onAddItemHandler.bind(this)}
            item={this.state.skill}
            items={this.state.skills}
            itemName="skill"
            displayName="Skills: "
            {...this.state} 
            removeHandler={this.removeHandler}
          />
          <UserListInput 
            onChange={onListChangeHandler.bind(this)} 
            onSubmit={onAddItemHandler.bind(this)}
            item={this.state.award}
            items={this.state.awards}
            itemName="award"
            displayName="Awards: "
            {...this.state} 
            removeHandler={this.removeHandler}
          />
          <UserEducationInfo onChange={onChangeHandler.bind(this)} {...this.state} />
          <button onClick={onAddEducationHandler}>Add Education</button>

          <UserExperienceInfo onChange={onChangeHandler.bind(this)} {...this.state} />
          <button onClick={onAddWorkHandler}>Add Work Experience</button>



          <ReactToPrint trigger={() => {
            return <a href="#">Save as PDF</a>
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
