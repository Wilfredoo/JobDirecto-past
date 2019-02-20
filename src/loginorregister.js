import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class LoginOrRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    };

    async componentDidMount() {
        await axios.get('loginorregister').then(result => {
            if(result) {
                location.replace('/jobform');
            }
        })
    }

    login() {
        location.replace('/login');
    }

    register() {
        location.replace('/register');
    }

    render() {
        return(
            <div className="login-container">
                <h1>Login / Register</h1>
                    <div>
                        <input id="login" onClick={this.login} type="submit" value="Login"/>
                        <input id="register" onClick={this.register} type="submit" value="Register"/>
                    </div>
            </div>
        )
    }
}
