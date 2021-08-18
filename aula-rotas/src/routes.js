import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Components/Header'
import Contato from './Pages/Contato'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
             <Route exact path='/' component={Home}/>
             <Routes path='/sobre' component={Sobre}/>
             <Routes path='/contato' component={Contato}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes