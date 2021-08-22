import './style.css'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

export default function App(){
  return(
    <div className='app'>
      <Routes/>
      <ToastContainer auto/>
    </div>
  )
}