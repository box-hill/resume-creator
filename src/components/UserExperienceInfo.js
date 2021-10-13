import React, { Component } from "react";



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
        const { company, jobTitle, workStart, workEnd, workDes, work, removeHandler} = this.props;
        return (
            <div>
                <div>Work Experience</div>
                <form>
                    <div>
                    <label htmlFor="company">Company: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="company" type="text" id="company" value={company}/>
                    </div>
                    <div>
                    <label htmlFor="job-title">Job Title: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="jobTitle" type="text" id="job-title" value={jobTitle}/>
                    </div>

                    <div>
                    <label htmlFor="workStart">Start Date: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="workStart" type="text" id="workStart" value={workStart}/>
                    </div>
                    <div>
                    <label htmlFor="workEnd">End Date: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="workEnd" type="text" id="workEnd" value={workEnd}/>
                    </div>

                    <div>
                    <label htmlFor="workDes">Work Description: </label>
                    </div>
                    <div>
                    <textarea onChange={this.onFieldChange.bind(this)} 
                    name="workDes" type="text" id="workDes" value={workDes}
                    rows="3"/>
                    </div>
                </form>
                <ul>
                  {work.map((item) => {
                  return (
                    <li key={item.id}>
                    {item.company}, {item.jobTitle}, {item.workStart} - {item.workEnd}, {item.workDes}
                    <button onClick={() => removeHandler(item.id, "work", false)}>Remove</button>
                    </li>)
                  })}
                </ul>
            </div>
        )
    }
  }

  
  
  export default UserExperienceInfo;
  