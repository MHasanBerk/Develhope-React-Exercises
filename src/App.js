import React from "react";
import { HelloWorld } from "./HelloWorld";
import Message from "./Message";


export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Message />
            </div>
        )
    }
}

//Yes, we can use 'Message' component inside of our 'App' component. But we must import it first.