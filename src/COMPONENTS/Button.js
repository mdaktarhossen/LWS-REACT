import React, { Component } from 'react';

class Button extends Component {
  render() {
    const {lChange, locale}=this.props
    return (
      <div>
        <button onClick={()=>lChange(locale)}>{locale==="bn-BD"? "Go Bangla": "Go English"}</button>
      </div>
    )
  };
};
 
export default Button;