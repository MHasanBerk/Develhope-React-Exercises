import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById("root");

function addName(name){
    return (
        <div>
            <h1>Hello {name}!</h1>
            <h3>Type of: {typeof(name)}</h3>
        </div>
    )
}

//It ignores the "undefined" name variable.

ReactDOM.render(addName(), root);