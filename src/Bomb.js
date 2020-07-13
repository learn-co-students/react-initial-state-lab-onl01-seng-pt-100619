import React from 'react' 

class Bomb extends Component { 
    constructor(){ 
        super(props) 
          this.state = { 
              secondsLeft: this.props.initialCount 
          }
    }
    render() { 
        return( 
            <p>{this.state.secondsLeft = 0 ? "Boom!" : `${this.state.secondsLeft} til I go Boom!`}</p>
        ) 
    }
}

export default Bomb 
