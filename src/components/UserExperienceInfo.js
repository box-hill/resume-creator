import React, { Component } from "react";
import UserInputField from './UserInputField';

class UserExperienceInfo extends Component {
    constructor(props) {
      super(props);
    }
    
    onFieldChange(e) {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      
      this.props.onChange(fieldName, fieldValue);
      
    }

    render() {
        const { onChange, company, jobTitle, workStart, workEnd, workDes, work, removeHandler} = this.props;
        return (
            <div>
                <div className="form-heading">Work Experience</div>
                <form>
                  <UserInputField onChange={onChange} fieldName="jobTitle" displayName="Job Title: " value={jobTitle}/>
                  <UserInputField onChange={onChange} fieldName="company" displayName="Company: " value={company}/>
                  <UserInputField onChange={onChange} fieldName="workStart" displayName="Start Date: " value={workStart}/>
                  <UserInputField onChange={onChange} fieldName="workEnd" displayName="End Date: " value={workEnd}/>
                  <UserInputField onChange={onChange} fieldName="workDes" displayName="Work Description: " textarea={true} value={workDes}/>
                </form>
                <ul>
                  {work.map((item) => {
                  return (
                    <li key={item.id}>
                    {item.company}, {item.jobTitle}, {item.workStart} - {item.workEnd}
                    <button onClick={() => removeHandler(item.id, "work", false)}>Remove</button>
                    </li>)
                  })}
                </ul>
            </div>
        )
    }
  }

  
  
  export default UserExperienceInfo;
  