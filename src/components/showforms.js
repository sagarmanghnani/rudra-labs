import React, { Component } from 'react'

export class Showform extends Component {

  
  render() {
      
    return (
      <div>
      <p id="heading" className={(this.props.isBoldHeading ? 'bold' : '') + ' ' + (this.props.isItalicHeading ? 'italic' : '')}>{this.props.values.heading}</p>
        <p id="Body" className={(this.props.isBoldBody ? 'bold' : '') + ' ' + (this.props.isItalicBody ? 'italic' : '')}>{this.props.values.Body}</p>
      </div>
    )
  }
}

export default Showform
