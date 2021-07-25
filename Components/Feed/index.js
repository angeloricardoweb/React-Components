import React, { Component } from 'react';
import './style.css'



export default class Feed extends Component {
        render() {
        return (
            <div className="grid" >
                <div className="wrapper" key={this.props.id}>
                    <h2 >Usuário: {this.props.username}</h2>
                    <h3>{this.props.curtidas > 1? `${this.props.curtidas} curdidas` : `${this.props.curtidas} curtida`}</h3>
                    <h3>{this.props.comentarios > 1 ? `${this.props.comentarios} comentarios`: `${this.props.comentarios} comentario`}</h3>
                </div>
                <hr />
            </div>
        )
    }
}