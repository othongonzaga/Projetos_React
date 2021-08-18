import{Link} from 'react-router-dom'

export default function Contato(){
    return(
      <div>
        <h1>Contatos:</h1><br/>
        <span>Nome: Othon Gonzaga</span>

        <Link to='/'>Voltar para a Home</Link><br/>
        <Link to='/contato'>Atualizar</Link>
      </div>
    )
  }