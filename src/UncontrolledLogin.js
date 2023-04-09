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

    componentDidMount(){
        this._myRef.current.focus();
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Username:
                    <input name="username" ref={this._myRef}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password"/>
                </label>
                <label>
                    Remember Me
                    <input name="remember" type="checkbox"/>
                </label>
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
            </form>
        )
    }
}