import React, { Component } from 'react'

export default class Form extends Component {
  state={
    title: "javascript",
    text:"hi javascript form"
  };
  handelChange=(e)=>{
   switch (e.target.type) {
    case 'text':
      this.setState({
        title:e.target.value,
      });
      break
      case 'textarea':
        this.setState({
          text:e.target.value,
        });
        break
    default:
      console.log("nothing");
   }
  }
  render() {
    const {title, text}=this.state;
    return (
      <div>
        <form action="">
        <input type="text" 
        placeholder='Enter Somthing' 
        value={title} onChange={this.handelChange}/>
        <br />
        <br />
        <textarea name="text"  value={text} onChange={this.handelChange}></textarea>

        </form>
      </div>
    )
  }
}
