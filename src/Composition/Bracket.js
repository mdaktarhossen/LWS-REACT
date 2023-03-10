import  { Component } from 'react'

export default class Emoji extends Component {
  addEmoji=(text)=>`[ ${text} ]`

  render() {
    return this.props.children({addEmoji:this.addEmoji});
  }
}
