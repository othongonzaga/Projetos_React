import {BemVindo, Container, Header, Título} from './styles'

function App() {
  return (
    <Container>
      <Header>
        <Título>Projeto</Título>
      </Header>

      <BemVindo cor='00FF00'>Bem Vindo ao sistema</BemVindo>
    </Container>
  );
}

export default App;

{/* <div className="container">
<header className='header'>
  <a className='título'>Projeto Styled</a>
</header>

<h1>Bem vindo!</h1>
</div> */}
