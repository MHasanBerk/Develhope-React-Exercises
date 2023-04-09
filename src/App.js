import React from "react";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Colors } from "./Colors";

const colors = [
    {id : 1, name: "red"},
    {id : 2, name: "blue"},
    {id : 3, name: "green"}
]

export class App extends React.Component{
    render(){
        return (
            <div>
                <InteractiveWelcome />
                <Counter initialValue={10} incrementBy={2} timeout={2000}/>
                <ClickCounter incrementBy={2}/>
                <ClickTracker />
                <Login/>
                <Colors items={colors}/>
            </div>
        )
    }
}