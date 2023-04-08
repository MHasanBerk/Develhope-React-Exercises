import React from "react";
import { Welcome } from "./Welcome"
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";

export class App extends React.Component{
    render(){
        return (
            <div>
                <Welcome name="John" age={25}/>
                <Counter initialValue={10} incrementBy={2} timeout={2000}/>
                <ClickCounter incrementBy={2}/>
                <ClickTracker />
            </div>
        )
    }
}