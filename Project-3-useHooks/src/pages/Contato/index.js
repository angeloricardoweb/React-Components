import React from 'react'
import { Link } from 'react-router-dom'

export default function Contato(){
    return(
        <div>
            <h1> Página Contato</h1>            
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}