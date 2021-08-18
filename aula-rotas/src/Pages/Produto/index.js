import{Link} from 'react-router-dom'

export default function Produto(){
    return(
      <div>
        <h1>Grade de produtos:</h1><br/>
        <sapn>Produto selecionado: 12</sapn><br/>

        <Link to='/'>Voltar para Home</Link>
      </div>
    )
  }