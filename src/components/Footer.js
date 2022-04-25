import React from 'react';
import './style.css';

const Footer = () => (
    <div >
        <footer>
            <div className='footer__description'>
                <div>
                    <img src='https://i.ibb.co/94pxSTy/paypal-credit-card-icon-25.png' alt='Métodos de Pagamento' style={{ maxWidth: '300px' }} />
                </div>
                <div>
                    <p style={{ paddingTop: '10px' }}>
                        Política de Privacidade
                    </p>
                    <p>
                        Política de Entregas
                    </p>
                    <p>
                        Perguntas e Respostas
                    </p>
                </div>
            </div>
            <p className='footer'>© 2022 Copyright: Daniele Severiano</p>
        </footer>
    </div>
);

export default Footer;