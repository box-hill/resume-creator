import React, { Component } from "react";
import UserInputField from './UserInputField';

class UserPersonalInfo extends Component {
    constructor(props) {
      super(props);
    }
    
    onFieldChange(e) {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      
      this.props.onChange(fieldName, fieldValue);
      
    }

    render() {
        const { onChange, degree, institution, educationStart, educationEnd, education, removeHandler } = this.props;
        return (
            <div>
                <div className="form-heading">Education</div>
                <form>
                  <UserInputField onChange={onChange} fieldName="degree" displayName="Degree: " value={degree}/>
                  <UserInputField onChange={onChange} fieldName="institution" displayName="Institution: " value={institution}/>
                  <UserInputField onChange={onChange} fieldName="educationStart" displayName="Start Date: " value={educationStart}/>
                  <UserInputField onChange={onChange} fieldName="educationEnd" displayName="End Date: " value={educationEnd}/>  
                </form>
                <ul>
                  {education.map((item) => {
                  return (
                    <li key={item.id}>
                    {item.degree}, {item.institution}, {item.educationStart} - {item.educationEnd}
                    <button onClick={() => removeHandler(item.id, "education", false)}>Remove</button>
                    </li>)
                  })}
                </ul>
            </div>
        )
    }
  }

  
  
  export default UserPersonalInfo;
  