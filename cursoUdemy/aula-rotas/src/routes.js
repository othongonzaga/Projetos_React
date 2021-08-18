import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Contato from './Pages/Contato'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Erro from './Pages/Erro'
import Produto from './Pages/Produto'
 
const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
             <Route exact path='/' component={Home}/>
             <Route exact path='/sobre' component={Sobre}/>
             <Route exact path='/contato' component={Contato}/>
             <Route exact path='/produto/:id' component={Produto}/>   
             <Route exact path='*' component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes