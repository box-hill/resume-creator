import './App.css';
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import uniqid from "uniqid";

import PreviewResume from "./components/PreviewResume";
import UserPersonalInfo from "./components/UserPersonalInfo";
import UserListInput from "./components/UserListInput.js";
import UserEducationInfo from "./components/UserEducationInfo.js";
import UserExperienceInfo from "./components/UserExperienceInfo.js";
import UserColorChoice from './components/UserColorChoice';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

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

      id: uniqid(),

      colorA: '#73AD21',
      colorB: '#d8e1cb',
      colorC: '#121212',


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

  generateExample = () => {
    this.setState(
      {
        firstName: 'MICHAEL',
        lastName: 'SCOTT',
        summary: `Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way, like an improv conversation. An improversation.`,
        phoneNum: '9876 1234',
        emailAdd: 'email@email.com',
        githubLink: 'https://github.com/box-hill/resume-creator',
        portfolioLink: 'https://github.com/box-hill/resume-creator',
        education: [{
          degree: 'Masters in XYZ',
          institution: 'University ABC',
          educationStart: '2006',
          educationEnd: '2008',
          id: '1',
        },
        {
          degree: 'Bachelors of ABC',
          institution: 'University XYZ',
          educationStart: '1999',
          educationEnd: '2005',
          id: '2',
        }],
        awards: [{
          text: 'The DUNDIES 2021',
          id: '1',
        },{
          text: 'The DUNDISE 2020',
          id: '2'
        }],
        skills: [{text: 'This', id: '1'},{text: 'Website', id: '2'},{text: 'was Made', id: '3'},{text: 'using', id: '4'},
        {text: 'React.js', id: '5'}, {text: 'and vanilla CSS', id: '6'}],
        work: [{
          company: 'Dunder Mifflin',
          jobTitle: 'Manager',
          workStart: '1992',
          workEnd: 'Present',
          workDes: `I'm not superstitious, but I am a little stitious.`,
          id: '1'
        },
        {
          company: 'Company ABC-XYZ',
          jobTitle: 'Job Title',
          workStart: '1234',
          workEnd: '2345',
          workDes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
          id: '2'
        }]
      }
    )
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

  changeTheme = (key) => {
    if(key === 'a'){
      this.setState(
        {
          colorA: '#73ad21',
          colorB: '#d8e1cb',
          colorC: '#121212',
        }
      )
    }
    else if (key === 'b'){
      this.setState(
        {
          colorA: '#00ADB5',
          colorB: '#EEEEEE',
          colorC: '#222831',
        }
      )
    }
    else {
      this.setState(
        {
          colorA: '#3F72AF',
          colorB: '#DBE2EF',
          colorC: '#112D4E',
        }
      )
    }

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
      onAddWorkHandler, generateExample, changeTheme } = this;
    const {  } = this.state;

    return (
      <div className="body">
        <header>R<span>ESUME</span> C<span>REATOR</span></header>
        <div className="container">
          <div className="user-input-form">
            <UserPersonalInfo onChange={onChangeHandler.bind(this)} />
            <UserListInput 
              onChange={onListChangeHandler.bind(this)} 
              onSubmit={onAddItemHandler.bind(this)}
              item={this.state.skill} items={this.state.skills} itemName="skill" 
              displayName="Skills: " {...this.state} removeHandler={this.removeHandler}
            />
            <UserListInput 
              onChange={onListChangeHandler.bind(this)} 
              onSubmit={onAddItemHandler.bind(this)}
              item={this.state.award} items={this.state.awards} itemName="award"
              displayName="Awards: " {...this.state} removeHandler={this.removeHandler}
            />
            <div className='form-divider'></div>
            <UserEducationInfo onChange={onChangeHandler.bind(this)} {...this.state} removeHandler={this.removeHandler}/>
            <div className='center-element'>
              <button onClick={onAddEducationHandler}>Add Education</button>
            </div>
            <div className='form-divider'></div>
            <UserExperienceInfo onChange={onChangeHandler.bind(this)} {...this.state} removeHandler={this.removeHandler}/>
            <div className='center-element'>
              <button onClick={onAddWorkHandler}>Add Work Experience</button>
            </div>
            <div className='form-divider'></div>
            <UserColorChoice onChange={onChangeHandler.bind(this)} changeTheme={changeTheme.bind(this)} {...this.state}/>
            <div className='form-divider'></div>
            <div className="center-element">
              <button onClick={generateExample}>Generate Example</button>
            </div>
            <div className="center-element">
              <ReactToPrint trigger={() => {
                return <button href="#">Save as PDF</button>
                }}
                content={() => this.componentRef}
              />
            </div>
          </div>
          
          <div ref={el => (this.componentRef = el)} >
            <PreviewResume 
              {...this.state}
            />
          </div>
          
          

          
        </div>
        <footer>
          <a href="https://github.com/box-hill" target="blank"><FontAwesomeIcon icon={faGithub}/></a>
          Made by Aaron L.
        </footer>
      </div>
    );
  }
}

export default App;
