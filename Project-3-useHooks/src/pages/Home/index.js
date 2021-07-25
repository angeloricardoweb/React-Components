import React from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
    return(
        <div>
            <h1> Página Home</h1>
            <Link to='/contato'>Contato</Link>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}