import './filme-info.css'
import {useParams, useHistory} from 'react-router-dom'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify"

export default function Filme(){
    const {id} = useParams()
    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                //Se tentar acessar com um ID que não existe, mando ele para a home
                history.replace('/')
                return
            }

            setFilme(response.data)
            setLoading(false)
        }

        loadFilmes()
        return() => {
            console.log('Componeente desmontado')
        }
    } ,[id, history])

    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || []

        //Se tiver um filme salvo ele não pode ser salvo duas vezes
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.error('Você já salvou esse filme')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando o filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className='botoes'>
                <button onClick={salvaFilme}>Salvar</button>
                <button><a target='blank' href={`https//youtube.com/results?search_query=${filme.nome} Trailer`}>
                    Trailer
                </a></button>
            </div>
        </div>
    )
}