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
          <form onSubmit={this.onAddItem.bind(this)}>
            <label htmlFor={itemName}>{displayName}</label>
            <input 
              maxLength="70"
              onChange={this.onFieldChange.bind(this)}
              name={itemName}
              value={item.text} 
              type="text" id={itemName}
            />
            <button type="submit">Add {itemName}</button>
          </form>
          <ul>
              {items.map((item) => {
              return (
              <li key={item.id}>
                  {item.text}
                  <button onClick={() => removeHandler(item.id, itemName)}>Remove</button>
              </li>)
              })}
          </ul>

        </div>
      )
    }
  }

  
  
  export default UserListInput;
  