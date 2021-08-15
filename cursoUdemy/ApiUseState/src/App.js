import React, {useState} from 'react'

function App(){

    const [tarefas, setTarefas] = usestate(['Pagar a conta de luz', 'Estudar React Js'])

    const [input, setInput] = useState('')

    function handleAdd(){
        setTarefas([...tarefas, input])
        setInput('')
    }

    return(
        <div>
           <ul>
               {tarefas.map(tarefa =>(
                   <li key={tarefa}>{tarefa}</li>
               ) )}
           </ul>
           <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>     
           <button type='button' onClick={nadleAdd}>Adicionar</button>     

        </div>
    )
}

export default App