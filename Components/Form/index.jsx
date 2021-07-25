import React, { Component } from 'react';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            sexo: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeSexo = this.handleChangeSexo.bind(this)
    }

    handleChangeEmail(event) {
        let valorDigitado = event.target.value;
        this.setState({ email: valorDigitado })
    }

    handleChangePassword(event) {
        let valorDigitado = event.target.value;
        this.setState({ password: valorDigitado })
    }

    handleChangeSexo(event) {
        this.setState({sexo: event.target.value})
    }


    render() {
        return (
            <div>
                <h1>Login</h1>
                E-mail
                <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                />
                <br />
                Password
                <input
                    type="password"
                    name="senha"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                />
                <select name="sexo" value={this.state.sexo}
                    onChange={this.handleChangeSexo}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Famele</option>
                </select>

                <br />
                <h3>Data</h3>
                <div>
                    Email: {this.state.email}
                    <br />
                    Password: {this.state.password}
                    <br />
                    Sexo:{this.state.sexo}
                </div>

            </div>
        )
    }
}