import React, {useEffect, useState} from 'react'
import './style.css'

function App() {
  const[nutri, setNutri] = useState([])

  useEffect(() => {
    function loadApi(){
      let url ='https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
      .then((r) => r.json())
      .then((json) =>{
        console.log(json)
        setNutri(json)
      })
    }

    loadApi()
  }, [])

  return (
    <div className="container">
      <header>
        <strong>Nutri do Povo</strong>
      </header>

      {nutri.map((item) => {
        return(
          <article key={item.id} className='post'>
            <strong className='título'>{item.titulo}</strong>
            <img src={item.capa} alt={item.título} className='capa'></img>
            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <a className='botao'>Ver mais</a>
          </article>
        )
      })}
    </div>
  );
}

export default App;