import React, {Component} from "react";

export default class ToggleText extends Component {
    constructor() {
        super();
        this.state = {
            visibility: "visible"
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        if (this.state.visibility === "visible") {
            this.setState({visibility: "hidden"})
        } else {
            this.setState({visibility: "visible"})
        }
    }

    render () {
        return (
            <div className="component-wrapper" id="toggle-text-wrapper">
                <div style={{visibility: this.state.visibility}}>Some text!</div>
                <button className="toggle-button" onClick={this.handleClick}>Toggle text</button>
            </div>
        )
    }
}