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

export class App extends React.Component{
    render(){
        return (
            <Container title="My App">
                <Welcome />
                <Counter initialValue={10} incrementBy={2} timeout={2000}/>
                <ClickCounter incrementBy={2} onCounterChange={(counter) => console.log("The Counter is now: " + counter)}/>
                <ClickTracker />
                <Login/>
                <TodoList>
                    {(items, handleRemove) => (items.map((item) => 
                        <li>
                            {item} <button onClick={handleRemove}>Remove</button>
                        </li>
                        )
                    )
                }
                </TodoList>
                <Sum/>
                <DisplayLanguage/>
            </Container>
        )
    }
}