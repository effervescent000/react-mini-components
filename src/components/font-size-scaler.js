import React, {Component} from "react";

export default class FontSizeScaler extends Component {
    constructor() {
        super();
        this.state = {
            fontSize: 12
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(num) {
        this.setState({
            fontSize: this.state.fontSize + num
        })
    }

    render() {
        return (
            <div className="component-wrapper" id="font-size-scaler-wrapper">
                <div style={{fontSize: this.state.fontSize}}>{`Font size ${this.state.fontSize}px`}</div>
                <div className="buttons-wrapper">
                    <button onClick={() => this.handleClick(2)}>+</button>
                    <button onClick={() => this.handleClick(-2)}>-</button>
                </div>
            </div>
        )
    }

}