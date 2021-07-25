import React, { Component } from 'react'
import Feed from '../Feed'

import './style.css'


export default class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feed: [
                { id: 1, username: 'Angelo', curtidas: 12, comentarios: 1 },
                // { id: 2, username: 'Jon', curtidas: 1, comentarios: 15 },
                // { id: 3, username: 'Mary', curtidas: 32, comentarios: 25 },
                // { id: 3, username: 'Clara', curtidas: 10, comentarios: 1 },
                // { id: 4, username: 'Aurora', curtidas: 42, comentarios: 35 }
            ]
        }
    }


    render() {
        return (
            <div>
                {this.state.feed.map(item => {
                    return (
                        <div className="grid">
                            <Feed 
                                id={item.id}
                                username={item.username}
                                curtidas={item.curtidas}
                                comentarios={item.comentarios}
                            />

                        </div>
                    )
                })
                }
            </div>
        )
    }
}