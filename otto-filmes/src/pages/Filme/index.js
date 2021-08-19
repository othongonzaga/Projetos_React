import './filme-info.csss'
import {useParams} from 'react-router-dom'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { loadConfig } from 'browserslist'

export default function Filme(){
    const {id} = useParams()
    const [filme, setFilmes] = useState([])
    cosnt [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            //console.log(response.data)
            setFilmes(response.data)
            setLoading(false)
        }

        loadFilmes()
    },[id])

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando o filme</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1></h1>
        </div>
    )
}