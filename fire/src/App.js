import { useState, useEffect} from 'react' 
import firebase from './firebaseConnection'
import './style.css'

function App() {
 const [idPost, setIdPost] = useState('')
 const [titulo, setTitulo] = useState('')
 const [autor, setAutor] = useState('')
 const [posts, setPosts] = useState([])

useEffect(() => { //Exemplo de como trabalhar com Real Time(Usar quando achar necessário)
  async function loadPosts(){
    await firebase.firestore().collection('posts')
    .onSnapshot((doc) =>{
      let meusPosts = []

      doc.forEach((item) =>{
        meusPosts.push({
          id: item.id,
          titulo:item.data().titulo,
          autor: item.data().autor,
        })
      })

      setPosts(meusPosts)
    })
  }

  loadPosts()
}, [])

 async function handleAdd(){
   await firebase.firestore().collection('posts')
   /*.doc('12345')
   .set({
     titulo: titulo,
     autor: autor
   })*/
   .add({
     titulo: titulo,
     autor: autor,
   })
   .then(() => {
     console.log('Dado cadastrados com sucesso')
     setTitulo('')
     setAutor('')
   })

   .cath((error) =>{
     console.log('Gerou algum erro: ' + error)
   })
 }

 async function buscaPost(){
   /*await firebase.firestore().collection('posts')
   .doc('123')
   .get()
   .then((snapshot) =>{
    setTitulo(snapshot.data().titulo)
    setAutor(snapshot.data().autor)
   })

   .cath(() =>{
     console.log('Deu algum erro!')
   })*/

   await firebase.firestore().collection('posts')
   .get()
   .then((snapshot) => {
      let lista = []

      snapshot.forEach((doc) =>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista)
   })

   .cath(() =>{
     console.log('Deu algum erro!')
   })

 }

 async function editarPost(){
   await firebase.firestore().collection('posts')
   .doc(idPost)
   .update({
     titulo: titulo,
     autor: autor
   })

   .then(() =>{
     console.log('Dados atualizados')
     setIdPost('')
     setTitulo('')
     setAutor('')
   })

   .catch(() =>{
     console.log('Erro ao atualizar')
   })
 }

 async function excluirPost(id){
  await firebase.firestore().collection('posts').doc(id)
  .delete()
  .then(() =>{
    alert('Esse post foi excluido!')
  })
 }

  return (
    <div>
      <h1>React Js + Firebase</h1> <br/>

      <div className='container'>

      <label>ID:</label>
      <input type='text' value={idPost} onChange={(e) => setIdPost(e.target.value)}/> 

      <label>Título: </label>
      <textarea type='text' value={titulo} onChange={(e) => setTitulo(e.target.value)}/>

      <label>Autor: </label>
      <input type='text' value={autor} onChange={(e) => setAutor(e.target.value)}/>

      <button onClick={handleAdd}>Cadastrar</button>
      <button onClick={buscaPost}>Buscar Post</button>
      <button onClick={editarPost}>Editar</button> <br/>


      <ul>
        {posts.map((post) =>{
          return(
            <li key={posts.id}>
              <span>ID - {post.id}</span>
              <span>Titulo: {post.titulo}</span> <br/>
              <span>Autor: {post.autor}</span> <br/>
              <button onClick={() => excluirPost(post.id)}>Excluir post</button>
            </li>
          )
        })}
      </ul>

      </div>

    </div>
  );
}

export default App;
