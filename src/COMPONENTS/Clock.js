import React, { Component } from 'react'
import Button from './Button';

class Clock extends Component {
  constructor(props, local){
    super(props);
    this.state={
      date: new Date(),
      local: "bn-BD",
    };
  };

  componentDidMount(){
    this.clockTimer=setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }

  handeler=(local)=>{
    this.setState({
      local:"en-US"
    })
  };

  render() {
    console.log("Clock Component render")
    const {date,local}=this.state
    return (
      <div>
        <h1>Component</h1>
        <h1>{date.toLocaleTimeString(local)}</h1>
        <Button onchange={this.handeler} text="click here"/>
      </div>
      
    )
  }
}
export default Clock;

