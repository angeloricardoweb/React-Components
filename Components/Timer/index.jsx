import React, { Component } from 'react';
import './style.css'
export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0
        }

        this.handleStartTimer = this.handleStartTimer.bind(this)
        this.desabilitaBotaoStart = this.desabilitaBotaoStart.bind(this)
    }

    desabilitaBotaoStart() {
        let state = this.state
        if (state.time > 0) {
            document.getElementById('btn-start').classList.toggle('disabled')
        }
        if(state.time === 0){
            document.getElementById('btn-start').classList.remove('disabled')
        }
    }

    handleStartTimer() {
        let state = this.state
        const myInterval = setInterval(() => {
            state.time += 0.1
            this.setState(state)
            this.desabilitaBotaoStart()
        }, 100)

        document.querySelector('#btn-pause').addEventListener('click', () => {
            clearInterval(myInterval)
            this.desabilitaBotaoStart()
        })

        document.querySelector('#btn-reset').addEventListener('click', () => {
            clearInterval(myInterval)
            state.time = 0
            this.setState(state)
            this.desabilitaBotaoStart()
        })
    }



    render() {
        return (
            <div className="wrapper">
                <h1>Timer</h1>
                <h2>{this.state.time.toFixed(1)}</h2>
                <div className="wrapper_btns">
                    <button id="btn-start" onClick={this.handleStartTimer}>Start</button>
                    <button id="btn-pause">Pause</button>
                    <button id="btn-reset">Reset</button>
                </div>
            </div>
        )
    }
}