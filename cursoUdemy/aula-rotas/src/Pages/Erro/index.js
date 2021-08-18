import{Link} from 'react-router-dom'

export default function Sobre(){
    return(
      <div>
        <h1>Ops! essa página não existe</h1><br/>

        <span>Você pode estar procurando por:</span><br/>
        <Link to='/'>Home</Link><br/>
        <Link to='/contato'>Contatos</Link><br/>
        <Link to='/sobre'>Atualizar</Link>
      </div>
    )
  }