import React from 'react'

export class Container extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1 style={{textAlign: "center"}}>{this.props.title}</h1>
                    <hr />
                </div>
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}