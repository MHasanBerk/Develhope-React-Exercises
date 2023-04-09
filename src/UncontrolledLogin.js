import React from "react";

export class UncontrolledLogin extends React.Component{
    _myRef = React.createRef();
    
    handleFormSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({
            username,
            password,
            remember
        })
    }

    
    render(){
        // const isUsernameEmpty = this._myRef.current.elements.username.value === ""
        // const isPasswordEmpty = this._myRef.current.elements.password.value === ""
        
        // const isDisabled = isUsernameEmpty || isPasswordEmpty ? true : false

        //I couldn't manage to do add disabled attribute to login button. I tried to use ref but I get null when the code runs.

        return(
            <form ref={this._myRef} onSubmit={this.handleFormSubmit}>
                <label>
                    Username:
                    <input name="username"/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password"/>
                </label>
                <label>
                    Remember Me
                    <input name="remember" type="checkbox"/>
                </label>
                <button ref={this._myRef} type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        )
    }
}