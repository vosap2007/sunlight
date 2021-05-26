import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import animalImg1 from '../../assets/1.jpg';
import animalImg2 from '../../assets/2.jpg';
import animalImg3 from '../../assets/3.jpg';
import animalImg4 from '../../assets/4.jpg';
import animalImg5 from '../../assets/5.jpg';
import animalImg6 from '../../assets/6.jpg';
import animalImg7 from '../../assets/7.jpg';
import animalImg8 from '../../assets/8.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <div>
              <Carousel>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg1}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg2}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg3}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg4}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg5}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg6}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg7}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className='d-block w-100'
                      src={animalImg8}
                      alt='Animals'
                      />
                      <Carousel.Caption>
                          <h3>Animals image</h3>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
            </div>
        )
    }
}