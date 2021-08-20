import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Filme from './pages/Filme'
import favoritos from './pages/Favoritos'

const Routes = () => {
  return(
    <BrowserRouter>
       <Header/> 
       <Switch>
         <Route exact path='/' component={Home}/> 
         <Route exact path='/filme/:id' component={Filme}/> 
         <Routes exact path='/favoritos' component={Favoritos}/>
       </Switch> 
    </BrowserRouter>
  )
}

export default Routes