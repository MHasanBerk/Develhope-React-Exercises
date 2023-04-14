import React from "react";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { Sum } from "./Sum";
import { DisplayLanguage } from "./DisplayLanguage";
import GithubUser from "./GithubUser";

export class App extends React.Component{
    render(){
        return (
            <Container title="My App">
                <Welcome />
                <GithubUser username="mhasanberk"/>
            </Container>
        )
    }
}