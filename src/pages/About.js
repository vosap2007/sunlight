import React, { Component } from 'react';
import { Row, Container, Col, Media } from 'react-bootstrap';
import style from './css/bg.css';

export default class About extends Component {
    render() {
        return (
            <div className='bg-color'>
              <Container>
                  <Row>
                      <Col md='9'>
                          <Media className='m-5'>
                              <img 
                              width={150}
                              height={150}
                              className='mr-3'
                              src='https://skabrat.com/wp-content/uploads/2012/09/DSC_0339-for-web.jpg'
                              />
                              <Media.Body>
                                  <h5>Текст про жирафа</h5>
                                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </Media.Body>
                          </Media>
                          <Media className='m-5'>
                              <img 
                              width={150}
                              height={150}
                              className='mr-3'
                              src='https://animalaid.org.au/wp-content/uploads/2018/06/rabbit-square.jpg'
                              />
                              <Media.Body>
                                  <h5>Текст про зайчика</h5>
                                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </Media.Body>
                          </Media>
                          <Media className='m-5'>
                              <img 
                              width={150}
                              height={150}
                              className='mr-3'
                              src='https://st.depositphotos.com/2044631/2014/i/600/depositphotos_20146623-stock-photo-tigers-face.jpg'
                              />
                              <Media.Body>
                                  <h5>Текст про тигра</h5>
                                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                              </Media.Body>
                          </Media>
                      </Col>
                  </Row>
              </Container>
            </div>
        )
    }
}