import React from "react";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Welcome name="John" age={25}/>
                <Counter initialValue={10} incrementBy={2} timeout={2000}/>
            </div>
        )
    }
}