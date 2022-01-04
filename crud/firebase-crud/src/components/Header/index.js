import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './styles.css'

const Header = () =>{
    const [activeTab, setActiveTab] = useState("Home")
    const location = useLocation()
    useEffect(() =>{
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname === "/add"){
            setActiveTab("AddContact")
        }
    }, [location])
    return(
        <div className='header'>
            <p className='logo'>OttoDev</p>
            <div className='header-right'>
                <Link to="/">
                    <p
                        className={`${activeTab ==="Home" ? "atice" : ""}`}
                        onClick={() => setActiveTab("Home")}
                        >
                            Home
                    </p>
                </Link>
                <Link to="/add">
                    <p
                        className={`${activeTab ==="AddContact" ? "atice" : ""}`}
                        onClick={() => setActiveTab("Adicionar Contato")}
                        >
                            Adicionar Contato
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header