// your Bomb code here!
import React, { Component } from "react"

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        // It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft
        if (this.state.secondsLeft > 0) {
            return (
                <p>
                    {this.state.secondsLeft} seconds left before I go boom!
                </p>
            )
        }
        else {
            return (
                <p>Boom!</p>
            )
        }
    }

}
