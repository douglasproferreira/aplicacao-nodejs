import React, {Component} from 'react';

import api from '../services/api';

import socket from 'socket.io-client';

import logo from '../ProductionLogo1.png';

import './Production.css';

import Productions from '../components/Productions'

export default class Production extends Component{

state = {
    productions: [],
    newTitle: '',
    newProduction: '',
};

async componentDidMount(){
    this.subscribeToEvents();

    const response = await api.get('productions')

    this.setState({ productions: response.data });
}

subscribeToEvents = () => {
    const io = socket('http://localHost:3000');

    io.on('New', data => {
        this.setState({productions: [data, ...this.state.productions]})
    })

}

handleNewProduction = async e => {
    if (e.keyCode !== 13) return;

    const title = this.state.newTitle;
    const text = this.state.newProduction;
    const author = localStorage.getItem('@Production:username');

    await api.post('productions', { author, title, text})

    this.setState({newTitle: ''});
    this.setState({newProduction: ''});
};

handleInputChange = e => {
    this.setState({newTitle: e.target.value});
};

handleTextChange = e =>{
    this.setState({newProduction : e.target.value});
}

    render(){
        return (
            <div className= "production-wrapper">
            <img src={logo} alt='Logo da App' />

            <form> 
                <input
                value = {this.state.newTitle}
                onChange= {this.handleInputChange}
                placeholder= "Digite o titulo da produção..."
                >
                </input>
                <textarea
                value = {this.state.newProduction}
                onChange={this.handleTextChange}
                onKeyDown={this.handleNewProduction}
                placeholder="Digite o corpo da sua produção..."
                />
            </form>

            <ul className="production-list">
                <h2>Produções</h2>
                { this.state.productions.map(production => (<Productions key={production._id} production={production}/>))}
            </ul>
            
            </div>
        );
    }
}