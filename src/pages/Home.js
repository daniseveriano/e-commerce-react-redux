import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../components/style.css';
import { Link } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Carousel fade style={{ position: 'relative' }}>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/1Gy8whW/claudia-manas-i-Jr-Iql-Apowk-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ zIndex: '1' }}>
                        <h3>Alta Tecnologia</h3>
                        <p>Eficácia cientificamente comprovada</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Pmjm82W/olena-sergienko-e-41-WYj-GPY-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{ zIndex: '1' }}>
                        <h3>Ativos de Origem Natural</h3>
                        <p>Todo o cuidado que sua pele e cabelo merecem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/vHmQd8L/sarah-b-i-ZQDne-G5-Ko-Y-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ zIndex: '1' }}>
                        <h3>Alta Qualidade</h3>
                        <p>Produtos consagrados em todo o mundo</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='button_home'>
                <p>Conheça os Nossos Produtos</p>
                <Link to='/e-commerce-react-redux/produtos/'><Button variant="outline-secondary" style={{ transition: '.5s ease-in-out' }}>Clique Aqui</Button>{' '}</Link>
            </div>
        </>
    )
}

export default Home;