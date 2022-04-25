import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from 'react-bootstrap/Button';
import './style.css'

const Contato = () => {
    return (
        <div className='container mt-2 form'>
            <h3 style={{ marginBottom: 40 }}>Entre em contato</h3>
            <div>
                <label>Nome</label>
                <div>
                    <input type='text' placeholder='Escreva seu nome' style={{ marginBottom: 20 }} />
                </div>
                <label>E-mail</label>
                <div>
                    <input type='text' placeholder='nome@email.com' style={{ marginBottom: 30 }} />
                </div>
            </div>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Escreva a sua mensagem aqui"
                style={{ width: 300, minHeight: 100, marginBottom: 30 }}
            />
            <div>
                <a href='/e-commerce-react-redux/'><Button variant="outline-secondary" style={{ transition: '.5s ease-in-out' }}>Enviar</Button></a>{' '}
            </div>
        </div>
    )
}

export default Contato;