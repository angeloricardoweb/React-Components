import React from 'react'
import { Link } from 'react-router-dom'


export default function Sobre(){
    return(
        <div>

            <h1> Página Sobre</h1>
            <Link to='/contato'>Contato</Link>
            <Link to='/'>Home</Link>
        </div>
    )
}