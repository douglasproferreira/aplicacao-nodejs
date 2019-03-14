import React, {Component} from 'react';

import './Production.css'

import {Link} from  'react-router-dom'


export default class Productions extends Component{

    render(){
        const {production} = this.props;

        return (
            <li className="production">
                <strong>
                    Título: {production.title}
                </strong>
                <h5>
                   Autor: {production.author} 
                </h5>
                <p>
                    {production.text}
                </p>
                <Link to={`./Edit/${production._id}`}>Editar</Link>
            </li>
        );
    }
}