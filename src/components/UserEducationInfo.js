import React, { Component } from "react";



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
        const { degree, institution, educationStart, educationEnd, education, removeHandler } = this.props;
        return (
            <div>
                <div>Education</div>
                <form>
                    <div>
                    <label htmlFor="degree">Degree: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="degree" type="text" id="degree" value={degree}/>
                    </div>
                    <div>
                    <label htmlFor="institution">Institution: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="institution" type="text" id="institution" value={institution}/>
                    </div>
                    

                    <div>
                    <label htmlFor="educationStart">Start Date: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="educationStart" type="text" id="educationStart" value={educationStart}/>
                    </div>
                    <div>
                    <label htmlFor="educationEnd">End Date: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="educationEnd" type="text" id="educationEnd" value={educationEnd}/>
                    </div>      
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
  