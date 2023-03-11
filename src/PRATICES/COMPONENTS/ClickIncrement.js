import React, { Component } from 'react'

export default class ClickIncrement extends Component {
  state={
    count:0,
  };

  handelIncrement=()=>{
    this.setState((preState)=>({count: preState.count+1}))
  }

  render() {
    const {count}=this.state;
    return (
      <div>
        <button type='button' value={count} onClick={this.handelIncrement}>
          CLICKED {count} TIME
        </button>
      </div>
    )
  };
};
