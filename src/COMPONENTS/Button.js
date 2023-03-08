import React, { Component } from 'react'

class Button extends Component {
  shouldComponentUpdate(nextprops){
    const {onchange:currentChange}=this.props;
    const {onchange: nextChange}=nextprops;
    if(currentChange===nextChange){
      return false;
    }
    else{
      return true;
    }
  }
  render() {
    console.log("Btn Component render")
    const {onchange, text}=this.props
    return (
      <div>
        <button onClick={onchange}>{text}</button>
      </div>
    )
  };
};

export default Button;
