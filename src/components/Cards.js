import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardsData from './CardsData';
import './style.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/actions';

const Cards = () => {
    const [data, setData] = useState(CardsData);

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
    }

    return (
        <div className='container mt-3' style={{ marginBottom: '80px' }}>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((element, id) => {
                        const p = element.price.toFixed(2).toString().replace(".", ",");
                        return (
                            <>
                                <Card style={{ width: '22rem', border: 'none' }} className='mx-2 mt-4 card_style'>
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            R$ {p}
                                        </Card.Text>
                                        <div className='button_div d-flex justify-content-center'>
                                            <Button variant="outline-secondary"
                                                onClick={() => send(element)}
                                                className='col-lg-12' style={{ transition: '.5s ease-in-out' }}>Adicionar ao Carrinho</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;