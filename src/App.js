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
      summary: '',
      phoneNum: '',
      emailAdd: '',
      githubLink: '',
      portfolioLink: '',

      id: uniqid(), // ID does not have to be unique between siblings


      //education
      degree: '',
      institution: '',
      educationStart: '',
      educationEnd: '',
      education: [],

      //work
      company: '',
      jobTitle: '',
      workStart: '',
      workEnd: '',
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
      id: this.state.id,
      
    }
    console.log(obj);
    this.setState(
      {
        education: this.state.education.concat(obj),
        degree: '',
        institution: '',
        educationStart: '',
        educationEnd: '',
        id: uniqid(),
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
      id: this.state.id,
    }
    this.setState(
      {
        work: this.state.work.concat(obj),
        company: '',
        jobTitle: '',
        workStart: '',
        workEnd: '',
        workDes: '',
        id: uniqid(),
      });
  }




  // remove selected skills from array
  removeHandler = (id, field, plural = true) => {
    if(plural === true){
      const fieldPlural = field + 's';
      this.setState({
        [fieldPlural]: this.state[fieldPlural].filter((field) => field.id!==id),
      })
    }
    else{
      this.setState({
        [field]: this.state[field].filter((item) => item.id!==id)
      })
    }
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
          <div className="user-input-form">
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
            <UserEducationInfo onChange={onChangeHandler.bind(this)} {...this.state} removeHandler={this.removeHandler}/>
            <button onClick={onAddEducationHandler}>Add Education</button>

            <UserExperienceInfo onChange={onChangeHandler.bind(this)} {...this.state} removeHandler={this.removeHandler}/>
            <button onClick={onAddWorkHandler}>Add Work Experience</button>
            <ReactToPrint trigger={() => {
              //resume.setAttribute("zoom", "100%");
              return <a href="#">Save as PDF</a>
              }}
              content={() => this.componentRef}
            />
          </div>
          <div ref={el => (this.componentRef = el)} >
            <PreviewResume 
              {...this.state}
            />
          </div>
          
          

          
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
