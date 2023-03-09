import React, { Component } from 'react';

class Button extends Component {
  render() {
    console.log("Btn running");
    const {text,lChange, locale}=this.props
    return (
      <div>
        <button onClick={()=>lChange(locale)}>{text}</button>
      </div>
    )
  };
};
 
export default Button;