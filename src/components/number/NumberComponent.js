import React, { Component } from 'react'

export default class NumberComponent extends Component {
  render() {
    return (
      <div>
        <h2>NumberComponent</h2>
        <p>Number : {this.props.math.no }</p>
        <button onClick={() => this.props.add(5)}>Change Number by 5</button>
      </div>
    )
  }
}
