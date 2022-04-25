import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { DLT } from '../redux/actions/actions';

const Header = () => {
    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    }

    useEffect(() => {
        total();
    }, [total])

    const t = price.toFixed(2).toString().replace(".", ",");

    return (
        <>
            <Navbar className="sticky-top" bg="light" expand="lg" style={{ height: '73px' }}>
                <Container className="d-flex flex-direction-row">
                    <Navbar.Brand><a href='/e-commerce-react-redux/'><img src='https://svgshare.com/i/gY1.svg' style={{ height: '60px' }} /></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" style={{ background: 'white' }}>
                        <Nav className="me-auto">
                            <Nav.Link><Link to={'/e-commerce-react-redux/'} style={{ textDecoration: 'none', color: 'grey' }}>Home</Link></Nav.Link>
                            <Nav.Link><Link to={'/e-commerce-react-redux/produtos'} style={{ textDecoration: 'none', color: 'grey' }}>Produtos</Link></Nav.Link>
                            <Nav.Link><Link to={'/e-commerce-react-redux/contato'} style={{ textDecoration: 'none', color: 'grey' }}>Contato</Link></Nav.Link>
                        </Nav>
                        <Badge badgeContent={getdata.length} color="secondary" id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            style={{ marginTop: '5px', marginBottom: '10px' }}
                            onClick={handleClick}>
                            <i class="fa-solid fa-cart-shopping" style={{ fontSize: 25, cursor: 'pointer' }}></i>
                        </Badge>
                    </Navbar.Collapse>
                </Container>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: '24rem', padding: '10' }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Detalhes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                const unidade = (e.qnty <= 1 ? 'unidade' : 'unidades');
                                                const p = e.price.toFixed(2).toString().replace(".", ",");

                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/e-commerce-react-redux/produtos/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: '5rem', height: '5rem' }} alt='Produto' />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p><strong>R$ {p}</strong> por unidade</p>
                                                                <p>{e.qnty} {unidade}</p>
                                                                <p style={{ color: 'red', fontSize: '20', cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>
                                                            <td className='mt-5' style={{ color: 'red', fontSize: '20', cursor: 'pointer' }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            }
                                            )
                                        }
                                        <p className='text-center'><strong>Total: R${t}</strong></p>
                                    </tbody>
                                </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: '24rem', padding: 10, position: 'relative' }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }}></i>
                                <p style={{ fontSize: 22 }}>Seu carrinho está vazio!</p>
                                <img src='https://i.ibb.co/XXS5ZCx/empty-cart.gif' alt='Produto' className='emptycart-img' style={{ width: '5rem', padding: 10 }} />
                            </div>
                    }


                </Menu>
            </Navbar>
        </>
    )
}

export default Header;