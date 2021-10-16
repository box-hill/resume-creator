import React, { Component } from "react";

class UserListInput extends Component {
    constructor(props) {
      super(props);
    }
    
    onFieldChange(e) {
      const fieldValue = e.target.value;
      const fieldName = e.target.name;
      this.props.onChange(fieldName, fieldValue);
    }

    onAddItem = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.props.itemName);
    };

    render() {
      const { item, items, itemName, displayName, removeHandler } = this.props;
      return (
        <div>
          <div className='form-divider'></div>
          <form onSubmit={this.onAddItem.bind(this)} className="input-line">
            <input 
              maxLength="70"
              onChange={this.onFieldChange.bind(this)}
              name={itemName}
              value={item.text} 
              type="text" id={itemName}
              placeholder=" "
            />
            <label htmlFor={itemName}>{displayName}</label>
            <div className='center-element'>
              <button type="submit">Add {itemName}</button>
            </div>
          </form>
          <ul>
              {items.map((item) => {
              return (
              <li key={item.id}>
                  {item.text}
                  <div>
                    <button onClick={() => removeHandler(item.id, itemName)}>Remove</button>
                  </div>
              </li>)
              })}
          </ul>

        </div>
      )
    }
  }

  
  
  export default UserListInput;
  