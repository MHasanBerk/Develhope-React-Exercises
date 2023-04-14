import { useEffect, useState } from "react";

export function Counter(){
    const [count,setCount] = useState(0);

    useEffect(() => {
        const timerID = setInterval(() => {
            setCount(c => c + 1)
        },1000);

        
        return () => {clearInterval(timerID)}

    },[]);

    return <h1>Count: {count}</h1>
}


// import React from "react"

// export class Counter extends React.Component{
//     state = {
//         count : 0
//     }

//     constructor(props){
//         super(props)

//         setInterval(() => {
//             this.setState((state) => {return {count: state.count + 1}})
//         },1000)
//     }
    
//     render(){
//         return(
//             <div>
//                 <h1>count: {this.state.count}</h1>
//             </div>
//         )
//     }
//}