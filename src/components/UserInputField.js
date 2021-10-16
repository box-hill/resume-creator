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
      const { fieldName, displayName, textarea, value, type} = this.props;
      let inputType = type;
      if(inputType!=='color'){
        inputType = 'text';
      }
      return (
        <div>
          { textarea===true ? 
          <div className='text-area'>
            <div><label htmlFor={fieldName}>{displayName}</label></div>
            <textarea onChange={this.onFieldChange.bind(this)} name={fieldName} type={inputType} id={fieldName} rows="6" cols="60" value={value}/> 
          </div>:
          <div className='input-line'>
            <input onChange={this.onFieldChange.bind(this)} name={fieldName} type={inputType} id={fieldName} value={value} placeholder=' '/>
            <label htmlFor={fieldName}>{displayName}</label>
          </div>
          }
        </div>
      )
    }
  }

  
  
  export default UserInputField;
  