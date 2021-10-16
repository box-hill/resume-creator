import React, { Component } from "react";
import UserInputField from './UserInputField';

class UserPersonalInfo extends Component {
    constructor(props) {
      super(props);
    };
  
    onFieldChange(e) {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      
      this.props.onChange(fieldName, fieldValue);
    }

    render() {
      const { onChange } = this.props;
      return (
        <div>
            <form>
              <UserInputField onChange={onChange} fieldName="firstName" displayName="First Name: "/>
              <UserInputField onChange={onChange} fieldName="lastName" displayName="Second Name: "/>
              <UserInputField onChange={onChange} fieldName="summary" displayName="Profile Summary: " textarea={true}/>
              <UserInputField onChange={onChange} fieldName="phoneNum" displayName="Phone Number"/>
              <UserInputField onChange={onChange} fieldName="emailAdd" displayName="Email: "/>
              <UserInputField onChange={onChange} fieldName="githubLink" displayName="Github Link: "/>
              <UserInputField onChange={onChange} fieldName="portfolioLink" displayName="Portfolio Link: "/>
            </form>
        </div>
      )
    }
  }

  
  
  export default UserPersonalInfo;
  