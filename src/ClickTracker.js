import React from "react";

export class ClickTracker extends React.Component{
    state = {
        lastClick: ""
    }

    handleClick = (event) => {
        this.setState(() => {
            return{
                lastClick: event.target.textContent
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Button 1</button>
                <button onClick={this.handleClick}>Button 2</button>
                <button onClick={this.handleClick}>Button 3</button>
                <h1>Last Clicked Button: {this.state.lastClick}</h1>
            </div>
        )
    }
}