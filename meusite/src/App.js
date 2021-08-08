import React from 'react'

const Equipe = (props) => {
    return(
        <div>
            <Sobre username={props.nome} caego={props.cargo}
            idade={props.idade}/>
            <Social facebook={props.facebook}/>
            <hr/>
        </div>
    )
}

const Sobre =(props) => {
    return(
        <div>
            <h2>Olá, sou o(a) {props.username}</h2>
            <h3>Crago: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    )
}

const Social =(props) => {
    return(
        <div>
            <a>href={props.facebook}Facebook</a>
            <a>LinkedIn</a>
            <a>Youtube</a>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome='Othon' cargo='Programador' idade='19' facebook='https://facebook.com'/>
            <Equipe nome='Lucas' cargo='Advogado' idade='36' facebook='https://facebook.com'/>
            <Equipe nome='Amanda' cargo='Front-End' idade='22' facebook='https://facebook.com'/>
        </div>
    )
}

export default App