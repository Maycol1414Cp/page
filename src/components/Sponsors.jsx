import React from 'react';
import { Carousel } from 'react-bootstrap';

export const Sponsors = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/images/sponsors/sp1.jpg')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Sponsor 1</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/images/sponsors/sp2.jpg')}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Sponsor 2</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../assets/images/sponsors/sp3.jpg')}
                    alt="third slide"
                />
                <Carousel.Caption>
                    <h3>Sponsor 3</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

