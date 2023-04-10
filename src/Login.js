import { useState } from "react"

export function Login(){
    const [data,setData] = useState({
        username: "",
        password: "",
        remember: false
    })
    function handleSubmit(e){
        e.preventDefault();
    }

    function handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;
        const checked = e.target.checked;

        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value
        })
    }

    function handleLoginButton(){
        console.log(data);
    }

    function handleResetButton(){
        setData({
            username: "",
            password: "",
            remember: false
        })
    }

    const isDisabled = (data.username === "" || data.password === "") ? true : false

    const styleLoginButton = {
        backgroundColor: data.password.length < 8 ? "red" : "green",
        color: "white"
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <label>
                Username:
                <input name="username" value={data.username} onChange={handleInputChange}/>
            </label>
            <label>
                Password:
                <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
            </label>
            <label>
                Remember me
                <input name="remember" type="checkbox" value={data.remember} onChange={handleInputChange}/>
            </label>
            <button onClick={handleLoginButton} disabled={isDisabled} style={styleLoginButton}>Login</button>
            <button onClick={handleResetButton}>Reset</button>
        </form>
    )
}

// import React from "react";

// export class Login extends React.Component{

//     state = {
//         username : '',
//         password : '',
//         remember : false,
//     }

//     handleInputChange = (event) => {
//         const name = event.target.name;
//         const type = event.target.type;
//         const value = event.target.value;
//         const checked = event.target.checked;

//         this.setState({
//             [name] : type === 'checkbox' ? checked : value
//         })
//     }

//     onLogin = () => {
//         this.setState({
//             username: this.state.username,
//             password: this.state.password
//         })
//         console.log(this.state)
//     }

//     handleReset = () => {
//         this.setState({
//             username : '',
//             password : '',
//             remember : false,
//         })
//     }

//     render(){
//         let isDisabled;
        
//         if(this.state.username === "" || this.state.password === ""){
//             isDisabled = true;
//         }else{
//             isDisabled = false;
//         }

//         const styleLogin = {
//             backgroundColor: this.state.password.length < 8 ? "red" : "green",
//             color: "white"
//         }
        
//         return(
//             <div>
//                 <h1>Login Form</h1>
//                 <label>
//                     Username:
//                     <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
//                 </label>
//                 <label>
//                     Password:
//                     <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
//                 </label>
//                 <label>
//                     Checkbox:
//                     <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/>
//                 </label>
//                 <button onClick={this.onLogin} disabled={isDisabled} style={styleLogin}>Login</button>
//                 <button onClick={this.handleReset}>Reset</button>
//             </div>
//         )
//     }
// }