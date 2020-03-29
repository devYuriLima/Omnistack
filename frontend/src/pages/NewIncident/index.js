import React, {useState} from 'react'
import api from '../../services/api'
import './style.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()

    

    const idOng = localStorage.getItem('ongId')

    async function HandleNewIncident(e){
        e.preventDefault()
        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {
                headers:{
                    Authorization: idOng,
                }
            })
            history.push('/profile')
        } catch (error) {
            alert("Impossible to create a new incindent")
        }
        
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva um caso detalhadamente para encontar um herói para resolver isso</p> 
                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para a home
                    </Link> 
                    
                </section>
                <form onSubmit={HandleNewIncident}>
                    <input 
                        required
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        required
                        placeholder="Descricao"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input 
                        required
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}