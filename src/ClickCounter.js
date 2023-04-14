import { useCounter } from "./useCounter"

export function ClickCounter({initialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return(
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
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