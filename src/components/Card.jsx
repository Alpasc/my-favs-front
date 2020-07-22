import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <h4>{this.props.nom}</h4>
        <img src={this.props.pic} alt={this.props.desc}/>
      </div>
    )
  }
}
