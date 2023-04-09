import React from 'react'

export class Colors extends React.Component{
    render(){
        const colors = this.props.items.map((color) => <li>{color}</li>)
        
        return <ul>{colors}</ul>
    }
}