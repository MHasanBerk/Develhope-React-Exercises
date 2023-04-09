import React from 'react'

export class Colors extends React.Component{
    render(){
        const colors = this.props.items.map((item) => <li key={item.id}>{item.name}</li>)
        
        return <ul>{colors}</ul>
    }
}