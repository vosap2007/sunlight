import React, { Component } from 'react';
import { Table, Container } from 'react-bootstrap';

export default class Price extends Component {
    render() {
        return (
            <div className='bg-color'>
                <Container className='p-5'>
              <Table striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>Студія</th>
      <th>Абонемент(міс)</th>
      <th>Разово</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Хореографія</td>
      <td>1500 грн.</td>
      <td>200 грн.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Капоейра</td>
      <td>1500 грн.</td>
      <td>200 грн.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Англійська мова</td>
      <td>1500 грн.</td>
      <td>200 грн.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Йога</td>
      <td>1500 грн.</td>
      <td>200 грн.</td>
    </tr>
  </tbody>
</Table>
</Container>
            </div>
        )
    }
}