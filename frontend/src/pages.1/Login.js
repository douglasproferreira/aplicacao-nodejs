import React, {Component} from 'react';
import Logo from '../ProductionLogo1.png';

import "./Login.css";

export default class Login extends Component{
    state = {
        username: '',
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { username } = this.state;

        if (!username.length) return;

        localStorage.setItem('@Production:username', username);

        this.props.history.push('/production')
    }

    handleInputChange = (e) => {
        this.setState({ username: e.target.value });
    }

    render(){
        return (
            <div className= 'login-wrapper'>
            <img src={Logo} alt= "GoTwitter"/>
            <form onSubmit = {this.handleSubmit}>
                <input value={this.state.username} 
                onChange={this.handleInputChange}
                placeholder="Nome de usuário"/>
                <button type="submit">Entrar</button>
            </form>
            </div>
        );
    }
}