import React from "react";
import { HelloWorld } from "./HelloWorld";


export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <HelloWorld />
                <HelloWorld />
                <HelloWorld />
                <HelloWorld />
            </div>
        )
    }
}

// Yes, we can use hello component more than once. For example in this code block,
// it will render 5 times.