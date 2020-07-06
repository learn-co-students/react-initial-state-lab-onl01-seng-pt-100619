// your ImageSlider code here!
import React, { Component } from "react"

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        // It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
        return (
            <p>
                I am on slide {this.state.currentSlideIndex}
            </p>
        )
    }

}
