import { useState } from 'react' 
import firebase from './firebaseConnection'

function App() {
 const [titulo, setTitulo] = useState('')
 const [autor, setAutor] = useState('')


  return (
    <div clasName='App'>
      <h1>React Js + Firebase</h1>

      <label>Título: </label>
      <textarea type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

      <label>Autor: </label>
      <input type='text' value={autor} onChange={(e) => setAutor(e.target.value)}/>

      <button onClick={handleAdd}>Cadastrar</button>
    </div>
  );
}

export default App;
