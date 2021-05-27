import React, { Component } from 'react';
import {Button, Card, CardDeck, Container} from 'react-bootstrap';

export default class Activities extends Component {
    render() {
        return (
            <>
            <Container>
                  <h2 className='text-center m-4'>Наші заходи</h2>
                  <CardDeck>
                      <Card bg='light' border='secondary' text='secondary'>
                          <Card.Img 
                          variant='top'
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcVSpf0jvxEwrnM2J939CvezvmJpZaQRg7w&usqp=CAU' 
                          />
                          <Card.Body>
                          <Card.Title>Леопард</Card.Title>  
                          <Card.Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Card.Text>  
                          <Button variant='primary'>Про нас</Button>
                          </Card.Body>
                      </Card>
                      <Card bg='light' border='secondary' text='secondary'>
                          <Card.Img 
                          variant='top'
                          src='https://specials-images.forbesimg.com/imageserve/5faad4255239c9448d6c7bcd/960x0.jpg?fit=scale' 
                          />
                          <Card.Body>
                          <Card.Title>Мавпа</Card.Title>  
                          <Card.Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Card.Text>  
                          <Button variant='primary'>Про нас</Button>
                          </Card.Body>
                      </Card>
                      <Card bg='light' border='secondary' text='secondary'>
                          <Card.Img 
                          variant='top'
                          src='https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/85465/1595849017_75113' 
                          />
                          <Card.Body>
                          <Card.Title>Зебра</Card.Title>  
                          <Card.Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </Card.Text>  
                          <Button variant='primary'>Про нас</Button>
                          </Card.Body>
                      </Card>
                  </CardDeck>
              </Container>
            </>
        )
    }
}