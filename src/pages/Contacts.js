import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container className='text-center'>
              <h1 className='mt-3'>Зв'яжіться з нами</h1>
              <h4 className='mt-3'>моб: 000 000-00-00</h4>
              <h4>email: aaa@aaaa.aa</h4>
              <h4 className='mt-3'>м. Київ, метро Позняки,
              <br/> вул. Лариси Руденко 6а, 3 пов
              <br/> (зі сторони школи)
                  <br/> 
                  <div className='mt-3'>Пн-Пт 10 - 19, Сб 11 - 17</div>
             </h4>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlVTTYqhKz9XF8Ot1Qn_2zFJ8f4odEBJumA&usqp=CAU' />
            </Container>
        )
    }
}