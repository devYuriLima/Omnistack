import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

import {FiLogIn} from 'react-icons/fi'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){
    const[id, setId] = useState('')
    const history = useHistory()

    async function handleLogon(e){
        e.preventDefault()

        try {
            const response = await api.post('/sessions', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('nomeOng', response.data.name)

            history.push('/profile')
        } catch (error) {
            alert("Impossible")
        }
    }
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder = "Sua ID"
                        type="password"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">ENTRAR</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"></img>
        </div>
    )
}