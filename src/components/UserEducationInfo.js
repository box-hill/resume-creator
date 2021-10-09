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
        const { degree, institution, educationStart, educationEnd } = this.props;
        return (
            <div>
                <div>Education</div>
                <form>
                    <div>
                    <label htmlFor="degree">Degree: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="degree" type="text" id="degree" value={degree}/>
                    <label htmlFor="institution">Institution: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="institution" type="text" id="institution" value={institution}/>
                    </div>

                    <div>
                    <label htmlFor="educationStart">Start Date: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="educationStart" type="text" id="educationStart" value={educationStart}/>
                    <label htmlFor="educationEnd">End Date: </label>
                    <input onChange={this.onFieldChange.bind(this)} 
                    name="educationEnd" type="text" id="educationEnd" value={educationEnd}/>
                    </div>
                    
                </form>
            </div>
        )
    }
  }

  
  
  export default UserPersonalInfo;
  