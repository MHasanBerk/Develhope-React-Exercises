import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById("root");

function sum(a,b){
    return <h2>{a} + {b} = {a + b}</h2>
}

ReactDOM.render(sum(12,8), root);