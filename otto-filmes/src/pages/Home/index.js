import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../services/api"
import './home.css'

export default function Home(){
    const[filmes, setFilmes] = setState([])

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes')
            //console.log(response.data)
            setFilmes(response.data)
        }

        loadFilmes()
    },[])

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filmes) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome}/>
                            <Link to='/'>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}