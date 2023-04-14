import React, { useState } from "react";

function useLogin(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") 

    function handleInputChange(event){
        const {name, value} = event.target;
        
        name === "username" ? setUsername(value) : setPassword(value);
        console.log({username: username, password: password});
    }

    return({
        username: username,
        password: password,
        onInputChange: handleInputChange
    })
}

export function Login(){
    const {username, password, onInputChange} = useLogin();

    // handleInputChange = (event) => {
    //     const name = event.target.name;
    //     const type = event.target.type;
    //     const value = event.target.value;
    //     const checked = event.target.checked;

    //     setData({
    //         [name] : type === 'checkbox' ? checked : value
    //     })
    // }

    // onLogin = () => {
    //     this.setState({
    //         username: this.state.username,
    //         password: this.state.password
    //     })
    //     console.log(this.state)
    // }

    // handleReset = () => {
    //     this.setState({
    //         username : '',
    //         password : '',
    //         remember : false,
    //     })
    // }
    
    // let isDisabled;
    
    // if(this.state.username === "" || this.state.password === ""){
    //     isDisabled = true;
    // }else{
    //     isDisabled = false;
    // }
    
    // const styleLogin = {
    //     backgroundColor: this.state.password.length < 8 ? "red" : "green",
    //     color: "white"
    // }
    
    return(
        <div>
            <h1>Login Form</h1>
            <label>
                Username:
                <input name="username" value={username} onChange={onInputChange}/>
            </label>
            <label>
                Password:
                <input name="password" type="password" value={password} onChange={onInputChange}/>
            </label>
        </div>
    )
}