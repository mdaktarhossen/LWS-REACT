import React, { Component } from 'react'

export default class Form extends Component {
  state={
    title: "javascript",
    text:"hi javascript form",
    libary:"React",
    checked:true,
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
      case 'select-one':
        this.setState({
          libary:e.target.value,
        });
        break
      case 'checkbox':
        this.setState({
          checked:e.target.checked,
        });
        break
    default:
      console.log("nothing");
   }
  }

  sunmitedhandaler=(e)=>{
    e.preventDefault();
    const {title, text, libary, checked}=this.state;
    console.log(title, text, libary, checked);

  }
  render() {
    const {title, text, libary, checked}=this.state;
    return (
      <div>
        <form onSubmit={this.sunmitedhandaler}>
        <input type="text" 
        placeholder='Enter Somthing' 
        value={title} onChange={this.handelChange}/>
        <br />
        <br />
        <textarea name="text"  value={text} onChange={this.handelChange}></textarea>
        <br />
        <br />
        <select value={libary} onChange={this.handelChange}>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
        </select>
        <br />
        <br />
        <input type="checkbox" checked={checked} value={checked} onChange={this.handelChange}/>
        <br />
        <br />
        <input type="submit" value="submit" />

        </form>
      </div>
    )
  }
}
