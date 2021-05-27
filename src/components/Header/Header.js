import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Activities from '../../pages/Activities';
import Contacts from '../../pages/Contacts';
import Photo from '../../pages/Photo';
import Price from '../../pages/Price';
import Studios from '../../pages/Studios';
import logo from './dance.png';

export default class Header extends Component {
    render() {
        return (
            <div>
              <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>
                      <img
                      src={logo}
                      height='30'
                      width='30'
                      className='d-inline-block aling-top'
                      alt='Logo'
                      /> Sunshine Dance Group
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

             <Router>
                 <Switch>
                     <Route exact path='/' component={Home} />
                     <Route exact path='/about' component={About} />
                     <Route exact path='/studios' component={Studios} />
                     <Route exact path='/activities' component={Activities} />
                     <Route exact path='/photo' component={Photo} />
                     <Route exact path='/price' component={Price} />
                     <Route exact path='/contacts' component={Contacts} />
                 </Switch>
             </Router>
            </div>
        )
    }
}