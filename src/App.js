import './App.css';
import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import uniqid from "uniqid";

import PreviewResume from "./components/PreviewResume";
import UserPersonalInfo from "./components/UserPersonalInfo";
import UserListInput from "./components/UserListInput.js";


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
    console.log('calle dme');
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

  // remove selected skills from array
  removeHandler = (id, field) => {
    const fieldPlural = field + 's';
    this.setState({
      [fieldPlural]: this.state[fieldPlural].filter((field) => field.id!==id),
    })
  }

  render() {
    const { onChangeHandler, onListChangeHandler, onAddItemHandler } = this;
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
