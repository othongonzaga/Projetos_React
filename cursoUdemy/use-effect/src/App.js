import React, {useState, useEffect} from 'react'

function App(){

    const [tarefas, setTarefas] = usestate([])

    const [input, setInput] = useState('')

    useEffect(() => {
      const tarefasStorage = localStorage.getItem('tarefas')

      if(tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage))
      }

    }, [])

    useEffect(() => {
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas])

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