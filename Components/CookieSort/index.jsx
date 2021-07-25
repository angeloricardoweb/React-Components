import React, { Component } from 'react';

import BiscoitoImg from './assets/biscoito.png'
import './style.css'


export default class CookieSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: 'Abra o biscoito e descubra sua frase da sorte'
        };

        this.phrases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ]

        this.handleLuckyPhrase = this.handleLuckyPhrase.bind(this)
    }

    handleLuckyPhrase(){
        let state = this.state;
        let randomNumber = Math.floor(Math.random()*this.phrases.length)
        state.phrase = this.phrases[randomNumber]
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <h1>Biscoito da Sorte</h1>
                <img src={BiscoitoImg} alt="Bicoto" />
                <Botao texto={'Abrir Biscoito'} handleLuckyPhrase={this.handleLuckyPhrase}/>
                <h2>{this.state.phrase}</h2>
            </div>
        )
    }
}

function Botao({ texto, handleLuckyPhrase }) {
    return (
        <button
        onClick={handleLuckyPhrase}
        
        >{texto}</button>
    )
}