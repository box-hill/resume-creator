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
                <label htmlFor="firstNameInput">First Name: </label>
                <input onChange={this.onFieldChange.bind(this)} 
                name="firstName" type="text" id="firstNameInput"/>

                <label htmlFor="secondNameInput">Last Name: </label>
                <input onChange={this.onFieldChange.bind(this)} 
                name="lastName" type="text" id="secondNameInput"/>

                <div>
                  <label htmlFor="phoneNum">Phone Number: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="phoneNum" type="text" id="phoneNum"/>
                  <label htmlFor="emailAdd">Email: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="emailAdd" type="text" id="emailAdd"/>
                </div>

                <div>
                  <label htmlFor="githubLink">Github link: </label>
                  <input onChange={this.onFieldChange.bind(this)} 
                  name="githubLink" type="text" id="githubLink"/>
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
  