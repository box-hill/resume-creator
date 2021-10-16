import React, { Component } from "react";

class UserInputField extends Component {
    constructor(props) {
      super(props);
    };
  
    onFieldChange(e) {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      
      this.props.onChange(fieldName, fieldValue);
    }

    render() {
      const { fieldName, displayName, textarea, value } = this.props;

      return (
        <div>
          <label htmlFor={fieldName}>{displayName}</label>
          { textarea===true ? 
          <div>
            <textarea onChange={this.onFieldChange.bind(this)} name={fieldName} type="text" id={fieldName} rows="5" cols="50" value={value}/> 
          </div>
          : <input onChange={this.onFieldChange.bind(this)} name={fieldName} type="text" id={fieldName} value={value}/>}
        </div>
      )
    }
  }

  
  
  export default UserInputField;
  