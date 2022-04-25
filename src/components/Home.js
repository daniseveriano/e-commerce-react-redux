import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './style.css';

const Home = () => {
    return (
        <>
            <Carousel fade style={{ position: 'relative' }}>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src="./claudia-manas-iJrIqlApowk-unsplash.jpg"
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
                        src="./olena-sergienko-e-41_WYjGPY-unsplash.jpg"
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
                        src="./sarah-b-iZQDneG5KoY-unsplash.jpg"
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
                <a href='/e-commerce-react-redux/produtos'><Button variant="outline-secondary" style={{ transition: '.5s ease-in-out' }}>Clique Aqui</Button></a>{' '}
            </div>
        </>
    )
}

export default Home;