import React from 'react'
import { Age } from './Age'

export class Welcome extends React.Component{
    render(){
        return (
            <div>
                <p>Hello, {this.props.name}</p>
                <Age age={18}/>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "John",
}