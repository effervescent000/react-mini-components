import React, { Component } from "react";

import Align from "./align";
import ToggleText from "./toggle-text";
import Counter from "./counter";
import FontSizeScaler from "./font-size-scaler";
import ColorText from "./color-text"
import ClockToggle from "./clock-toggle"

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div><Align /></div>
                <div><ToggleText /></div>
                <div><Counter /></div>
                <div><FontSizeScaler /></div>
                <div><ColorText /></div>
                <div><ClockToggle /></div>
            </div>
        );
    }
}
