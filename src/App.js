import React from "react";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

export class App extends React.Component{
    render(){
        return (
            <Container title="My App">
                <Welcome />
                <Counter initialValue={10} incrementBy={2} timeout={2000}/>
                <ClickCounter incrementBy={2}/>
                <ClickTracker />
                <Login/>
                <TodoList />
            </Container>
        )
    }
}