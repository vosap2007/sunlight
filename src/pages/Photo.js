import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CarouselBox from '../components/Carousel/Carousel';

export default class Photo extends Component {
    render() {
        return (
            <div>
                <Container>
                    <CarouselBox/>
                </Container>
              
            </div>
        )
    }
}