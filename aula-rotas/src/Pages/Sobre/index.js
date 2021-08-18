import{Link} from 'react-router-dom'

export default function Sobre(){
    return(
      <div>
        <h1>Sobre o React Js</h1><br/>

        <Link to='/'>Voltar para a Home</Link><br/>
        <Link to='/sobre'>Atualizar</Link>
      </div>
    )
  }