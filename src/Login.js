import React from "react";

export class Login extends React.Component{
    state = {
        username : '',
        password : '',
        remember : false
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const value = event.target.value;
        const checked = event.target.checked;

        this.setState({
            [name] : type === 'checkbox' ? checked : value
        })
    }

    render(){
        return(
            <div>
                <h1>Login Form</h1>
                <label>
                    Username:
                    <input name="username" value={this.state.username} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
                </label>
                <label>
                    Checkbox:
                    <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}/>
                </label>
            </div>
        )
    }
}