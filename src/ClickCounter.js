import { useEffect, useState } from "react"

export function ClickCounter({initialValue = 0, onCounterChange}){
    const [counter,setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((callbackCounter) => (callbackCounter + 1))
    }

    useEffect(() => {
        onCounterChange(counter)
    },[counter,onCounterChange])

    return(
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}

// import React from "react";
// import { CounterButton } from "./CounterButton";

// export class ClickCounter extends React.Component{
//     state = {
//         count : 0
//     }
    
//     handleClick = () => {
//         this.setState((state) => {
//             return{
//                 count: state.count + (this.props.incrementBy ?? 1)
//             }
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h3>Count with the Button: {this.state.count}</h3>
//                 <CounterButton onClick={this.handleClick}/>
//             </div>
//         )
//     }
// }