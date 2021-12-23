import React, {Component} from "react"

export default class ClockToggle extends Component {
    constructor() {
        super();
        this.state = {
            visibility: "visible",
            time: String(new Date())
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.visibility === "visible") {
            this.setState({visibility: "hidden"})
        } else {
            this.setState({visibility: "visible"})
        }
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({ time: String(new Date()) });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.liveTime);
    }

    render() {
        return (
            <div>
                <div style={{visibility: this.state.visibility}}>{this.state.time}</div>
                <button onClick={this.handleClick}>Toggle timer</button>
            </div>
        )
    }
}