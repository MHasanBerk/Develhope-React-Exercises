import React from "react";
import { Welcome } from "./Welcome"

export class App extends React.Component{
    render(){
        return <Welcome age={22}/>
    }
}