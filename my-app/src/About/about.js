import React from 'react';
import { Carousel} from 'react-bootstrap';
import './about.css'
const About=()=>{
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="car"
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Library Control</h3>
      <p>Achieve unrivalled  accuracy, complete traceability and full visbility on Library</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="car"
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>End To End Tracking</h3>
      <p>Keep track on every book in real time </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="car"
      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Easy To Use</h3>
      <p>User-friendly UI and Customizable view makes it easy for everyone to use.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )    }
export default About;