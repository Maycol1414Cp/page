import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carrousel() {
    return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-75"
                        src={require('../assets/images/Remontada.jpg')}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>La Gran Remontada</h3>
                        <p>FutbolerosClub logró una asombrosa remontada...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75"
                        src={require('../assets/images/Estadio.jpg')}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Inauguración del Estadio Fútbolmania</h3>
                        <p>FutbolerosClub celebró la inauguración de su nuevo estadio...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75"
                        src={require('../assets/images/CopaContiental.jpeg')}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Copa Continental</h3>
                        <p>FutbolerosClub se consagró campeón de la Copa Continental...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

    );
};

export default Carrousel;
