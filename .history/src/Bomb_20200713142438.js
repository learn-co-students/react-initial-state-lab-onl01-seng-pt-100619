// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {

  constructor() {
    super() 

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
        <div>{message}</div>
    )
  }
}

export default ImageSlider;

