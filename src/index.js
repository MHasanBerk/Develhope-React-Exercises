import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById("root");

function addName(name){
    return (
        <div>
            <h1>Hello {name}!</h1>
        </div>
    )
}

//We can't send a jsx expression plainly to a parameter.

ReactDOM.render(addName(<p>John<p/>), root);