import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById("root");

function addName(name){
    return <h1>Hello {name}!</h1>
}

ReactDOM.render(addName("Joe"), root);