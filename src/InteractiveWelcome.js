import React from "react"
import { Welcome } from "./Welcome"

export class InteractiveWelcome extends React.Component{
    state = {
        name : ''
    }

    handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name] : value
        })
    }


    render(){
        return (
            <div>
                <Welcome name={this.state.name}/>
                <input name="name" value={this.state.name} onChange={this.handleInputChange}/>
            </div>
        )
    }
}