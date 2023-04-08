import React from "react";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export class App extends React.Component{
    render(){
        return (
            <div>
                <InteractiveWelcome />
                <Counter initialValue={10} incrementBy={2} timeout={2000}/>
                <ClickCounter incrementBy={2}/>
                <ClickTracker />
                <Login/>
            </div>
        )
    }
}