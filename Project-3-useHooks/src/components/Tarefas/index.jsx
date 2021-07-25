import React, { useState } from 'react'

export default function Tarefas() {

    const [pessoas, setPessoas] = useState([
        'angelo',
        'jon',
        'mary'
    ])

    const [input, setInput] = useState('')

    function handleAdd() {
        setPessoas([...pessoas, input])
        setInput('')
    }




    return (
        <div>
            <ul>
                {pessoas.map((pessoa, indice) => (
                    <li key={indice}>{pessoa}</li>
                )
                )}
            </ul>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="button" onClick={handleAdd} >Enviar</button>
        </div>
    )

}

