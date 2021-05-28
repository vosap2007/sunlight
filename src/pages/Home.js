import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import style from './css/home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Image  className='relative w-100' src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-dancing-purple-hand-drawn-banner-image_167044.jpg" />
                <Container>
                    <h1 className="home-text-title">SUNSHINE dance group</h1>
                    <h3 className="home-text">ТАНЦЮЙ, ТРЕНУЙСЯ, НАВЧАЙСЯ, <br/> ВСЕБІЧНО РОЗВИВАЙСЯ <br/> В ДРУЖНІЙ АТМОСФЕРІ</h3>
                </Container>
            </div>
        )
    }
}