import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from './dance.png';

export default class Header extends Component {
    render() {
        return (
            <div>
              <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                      <img
                      src={logo}
                      height='30'
                      width='30'
                      className='d-inline-block aling-top'
                      alt='Logo'
                      /> Sunshine Dance
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                          <Nav.Link href='/'>Головна</Nav.Link>
                          <Nav.Link href='/about'>Про нас</Nav.Link>
                          <Nav.Link href='/studios'>Студії</Nav.Link>
                          <Nav.Link href='/activities'>Заходи</Nav.Link>
                          <Nav.Link href='/photo'>Фото</Nav.Link>
                          <Nav.Link href='/price'>Ціни</Nav.Link>
                          <Nav.Link href='/contacts'>Контакти</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
        )
    }
}