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
      return (
        <div>
            <form>
                <div>
                  <label htmlFor="firstNameInput">First Name: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="firstName" type="text" id="firstNameInput"/>
                </div>
                <div>
                  <label htmlFor="secondNameInput">Last Name: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="lastName" type="text" id="secondNameInput"/>
                </div>

                <label htmlFor="summaryInput">Summary: </label>
                <div>
                  <textarea onChange={this.onFieldChange.bind(this)} 
                  name="summary" type="text" id="summaryInput" rows="5" cols="50"/>
                </div>

                <div>
                  <label htmlFor="phoneNum">Phone Number: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="phoneNum" type="text" id="phoneNum"/>
                </div>
                <div>
                  <label htmlFor="emailAdd">Email: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="emailAdd" type="text" id="emailAdd"/>
                </div>

                <div>
                  <label htmlFor="githubLink">Github link: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="githubLink" type="text" id="githubLink"/>
                </div>
                <div>
                  <label htmlFor="portfolioLink">Portfolio link: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="portfolioLink" type="text" id="portfolioLink"/>
                </div>

            </form>
        </div>
      )
    }
  }

  
  
  export default UserPersonalInfo;
  