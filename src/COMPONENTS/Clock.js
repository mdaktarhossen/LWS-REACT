import React, { Component } from 'react'
import Button from './Button';

class Clock extends Component {
  state={date: new Date(),locale:"bn-BD" }

  componentDidMount(){
    this.timer=setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  };

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  lanHandalar=(locale)=>{
    this.setState({
      locale,
    })
  }


  render() {
    const {date,locale}=this.state;
    return (
      <div>
        <h1>Hi clock</h1>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        {locale==="bn-BD"?<Button text="click here" lChange={this.lanHandalar} locale="en-US"/>: <Button text="click here" lChange={this.lanHandalar} locale="bn-BD"/> }
      </div>
    )
  }
}

export default Clock;