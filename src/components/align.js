import React, { Component } from "react";

export default class Align extends Component {
    constructor() {
        super();
        this.state = {
            direction: "left",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(string) {
        this.setState({ direction: string });
    }

    render() {
        return (
            <div className="component-wrapper" id="align-wrapper">
                <div style={{ textAlign: this.state.direction }}>Some text here!</div>
                <div className="buttons-wrapper">
                    <button id="left-button" onClick={() => this.handleClick("left")}>
                        Left
                    </button>
                    <button id="center-button" onClick={() => this.handleClick("center")}>
                        Center
                    </button>
                    <button id="right-button" onClick={() => this.handleClick("right")}>
                        Right
                    </button>
                </div>
            </div>
        );
    }
}
