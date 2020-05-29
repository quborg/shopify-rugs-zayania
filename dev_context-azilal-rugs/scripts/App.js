import React, { Component } from 'react'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: props.products }
  }

  render() {
    console.log('react App render >>>', this.state)
    return (
      <div>
        Hello mada mada daneeeh!!
      </div>
    )
  }

}
