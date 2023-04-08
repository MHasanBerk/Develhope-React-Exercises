import React from "react";

export class ClickTracker extends React.Component{
    state = {
        lastClick: ""
    }

    handleClick = (event) => {
        console.log(event.target)
        this.setState(() => {
            return{
                lastClick: event.target.textContent
            }
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}><img src="" alt="image1" /></button>
                <button onClick={this.handleClick}><img src="" alt="image2" /></button>
                <button onClick={this.handleClick}><img src="" alt="image3" /></button>
                <h1>Last Clicked Button: {this.state.lastClick}</h1>
            </div>
        )
    }

    //Event targets the textContent of the buttons. So after removing the text and inserting img elements, we don't get any errors,
    //But we also won't get any context either.
}