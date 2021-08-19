import './header.css'
import {Link} from 'react-router-dom'

export default function header (){
    return(
        <header>
            <Link className='logo' to='/'>OttoFilmes</Link>
            <Link className='favoritos' to='/favoritos'>Salvos</Link>
        </header>
    )
}