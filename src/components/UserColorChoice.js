import React, { Component } from "react";
import UserInputField from './UserInputField';

class UserColorChoice extends Component {
    constructor(props) {
      super(props);
    }
    
    initiateChange(theme) {
        this.props.changeTheme(theme);
    }
    render() {
        const { onChange, colorA, colorB, colorC, } = this.props;
        return (
            <div className='center-element'>
                <div className="form-heading">Theme</div>
                <div className='theme-button-box'>
                    <button onClick={this.initiateChange.bind(this, 'a')} >Theme A</button>
                    <button onClick={this.initiateChange.bind(this, 'b')} >Theme B</button>
                    <button onClick={this.initiateChange.bind(this, 'c')} >Theme C</button>
                </div>
                  <UserInputField onChange={onChange} fieldName="colorA" displayName="Color 1: " value={colorA} type='color'/>
                  <UserInputField onChange={onChange} fieldName="colorB" displayName="Color 2: " value={colorB} type='color'/>
                  <UserInputField onChange={onChange} fieldName="colorC" displayName="Color 3: " value={colorC} type='color'/>

            </div>
        )
    }
  }

  
  
export default UserColorChoice;

  