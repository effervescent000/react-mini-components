import React, { Component } from "react";

export default class ColorText extends Component {
    constructor() {
        super();
        this.state = {
            text: "something here",
            color: "#000",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(color, text) {
        this.setState({
            text: text,
            color: color,
        });
    }

    render() {
        return (
            <div id="color-text-wrapper">
                <div className="text" style={{color: this.state.color}}>{this.state.text}</div>
                <input type="color" id="color-input" />
                <input type="text" id="text-input" />
                <button onClick={() => this.handleClick(
                        document.getElementById("color-input").value,
                        document.getElementById("text-input").value
                    )}>Save</button>
            </div>
        );
    }
}
