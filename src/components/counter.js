import React, {Component} from "react";

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(num) {
        this.setState({number: this.state.number + num})
    }

    render() {
        return (
            <div className="component-wrapper" id="counter-wrapper">
                <div>{this.state.number}</div>
                <div className="buttons-wrapper">
                    <button className="increment-button" onClick={() => this.handleClick(1)}>+</button>
                    <button className="increment-button" onClick={() => this.handleClick(-1)}>-</button>
                </div>
            </div>
        )
    }
}