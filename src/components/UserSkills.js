import React, { Component } from "react";
import uniqid from "uniqid";


class UserSkills extends Component {
    constructor(props) {
      super(props);
    }
    
    onFieldChange(e) {
      const fieldValue = e.target.value;
      this.props.onChange(fieldValue);
    }

    onAddSkill = (e) => {
      e.preventDefault();
      console.log(e);
      this.props.onSubmit();
    };

    render() {
      const { skill, skills, handler } = this.props;
      return (
        <div>
          <form onSubmit={this.onAddSkill.bind(this)}>
            <label htmlFor="skillInput">Skills: </label>
            <input 
              maxLength="70"
              onChange={this.onFieldChange.bind(this)}
              value={skill.text} 
              type="text" id="skillInput"
            />
            <button type="submit">Add Skill</button>
          </form>
          <ul>
              {skills.map((skill) => {
              return (
              <li key={skill.id}>
                  {skill.text}
                  <button onClick={() => handler(skill.id)}>Remove</button>
              </li>)
              })}
          </ul>

        </div>
      )
    }
  }

  
  
  export default UserSkills;
  