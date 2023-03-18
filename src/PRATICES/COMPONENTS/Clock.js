import React, { Component } from 'react'

export default class Clock extends Component {
  state={
    watch:new Date()
  };

  componentDidMount(){
    this.closeWatch=setInterval(() => {
      this.setState({
        watch:new Date()
      })
    }, 1000);
  };

  componentWillUnmount(){
    clearInterval(this.closeWatch)
  };

  handelWatchChange=()=>{
    this.setState({
      local: "bn-BD"
    })
  }
  render() {
    const {watch, local}=this.state
    const {text}=this.props
    return (
      <div>
        <h1>{watch.toLocaleTimeString(local)}</h1>
        <button onClick={this.handelWatchChange}>{text}</button>
      </div>
    )
  };
};
