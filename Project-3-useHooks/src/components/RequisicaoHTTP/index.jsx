import React, { useState, useEffect } from 'react'

import styled from 'styled-components'


const Container = styled.div`
border: 1px solid #c2c2c2;
width: 460px;
display: grid;
place-items: center;
border-radius:8px;
margin: 16px;
`

const Header = styled.h1`
    font-size: 22px;
    font-weight: 600;
    color: #80e285;
`
const Post = styled.article`
    width: 460px;
    background: #c2c2c2;
    padding: 16px;

    img{
        width: 100%;
    }

    
`



export default function RequisicaoHTTP() {

    const [nutri, setNutri] = useState([])

    useEffect(() => {


        function loadApi() {
            let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

            fetch(url)
                .then(r => r.json())
                .then(json => { setNutri(json) })


        }

        loadApi()

    }, [])

    return (
        <Container>
            <Header>Nutri</Header>
            <Post>
                {nutri.map(item => {
                    return (
                        <div id={item.id}>
                            <img src={item.capa} alt="" />
                            <h1>{item.titulo}</h1>
                            <p>{item.subtitulo}</p>

                        </div>
                    )
                })}
            </Post>
        </Container>
    )
}