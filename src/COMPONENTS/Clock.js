import React, { Component } from 'react'

class Clock extends Component {
  constructor(props){
    super(props);
    this.state={
      date: new Date()
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

  render() {
    return (
      <div>
        <h1>Component</h1>
        <h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1>
      </div>
      
    )
  }
}
export default Clock;

