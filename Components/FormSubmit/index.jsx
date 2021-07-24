import React, { Component } from 'react'


export default class FormSubmit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '',
                email: '',
                phone: '',
                sexo: ''
            }
        }

        this.enviar = this.enviar.bind(this)
        this.handleFormDate = this.handleFormDate.bind(this)
    }

    enviar(e) {
        const { name, email, phone, sexo } = this.state.form
        alert(`Nome: ${name}	\nE-mail: ${email}	\nPhone: ${phone}  \n Sexo: ${sexo}` )
    }

    handleFormDate(e) {
        let form = this.state.form
        form[e.target.name] = e.target.value
        this.setState({ form: form })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.enviar}>
                    <label>Nome:
                        <input type="text" name="name" value={this.state.form.name} onChange={this.handleFormDate} />
                    </label>
                    <label>E-mail:
                        <input type="text" name="email" value={this.state.form.email} onChange={this.handleFormDate} />
                    </label>
                    <label>Phone:
                        <input type="text" name="phone" value={this.state.form.phone} onChange={this.handleFormDate} />
                    </label>
                    <select name="sexo" value={this.state.form.sexo} onChange={this.handleFormDate}>
                        <option value="Male">Male</option>
                        <option value="Female">Famele</option>
                    </select>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}