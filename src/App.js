import React from "react";
import { Welcome } from "./Welcome"

export class App extends React.Component{
    render(){
        //Adding a 'strong' tag inside the props works. It inserts strong tag inside of our 'p' tag.
        return <Welcome name={<strong>Joe</strong>}/>
    }
}