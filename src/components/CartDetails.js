import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../redux/actions/actions';

const CartDetails = () => {
    const [data, setData] = useState([]);
    console.log(data);

    const { id } = useParams();

    const history = useNavigate();

    const dispatch = useDispatch();

    const getdata = useSelector((state) => state.cartreducer.carts);

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id;
        });
        setData(comparedata);
    }

    const send = (e) => {
        dispatch(ADD(e));
    }

    const dlt = (id) => {
        dispatch(DLT(id));
        history("/e-commerce-react-redux/produtos");
    }

    const remove = (item) => {
        dispatch(REMOVE(item));
    }

    useEffect(() => {
        compare();
    }, [id])

    return (
        <>
            <div className='container mt-2' style={{ marginBottom: '40px' }}>
                <section className='container mt-3'>
                    <div className='itemsdetails'>
                        {
                            data.map((ele) => {
                                const val = ele.price.toFixed(2).toString().replace(".", ",");
                                const tot = (ele.price * ele.qnty).toFixed(2).toString().replace(".", ",");
                                return (
                                    <div className='adapt'>
                                        <div className='items_img'>
                                            <img src={ele.imgdata} alt='Produto' />
                                        </div>
                                        <div className='details'>
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p><strong>Detalhes</strong>: {ele.details}</p>
                                                        <p><strong>Avaliação</strong>: <span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}> {ele.rating} ★</span></p>
                                                        <p><strong>Valor</strong>: R$ {val}</p>
                                                        <p><strong>Total</strong>: R$ {tot}</p>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: 'pointer', background: '#ddd', borderRadius: '10px', color: '#111' }}>
                                                            <span style={{ fontSize: 22 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}><strong>-</strong></span>
                                                            <span style={{ fontSize: 18 }}>{ele.qnty}</span>
                                                            <span style={{ fontSize: 22 }} onClick={() => send(ele)}><strong>+</strong></span>
                                                        </div>
                                                        <p><strong>Remove</strong>: <span><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: 'red', fontSize: '20', cursor: 'pointer' }}></i></span></p>

                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </>
    )
}

export default CartDetails;