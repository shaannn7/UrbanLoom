import React, { Component } from 'react'
import NavBar from './NavBar/Nav'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark" className='Carouse' >
        <Carousel.Item>
          <img
            style={{ maxHeight: "100vh" }}
            className="d-block w-100"
            src={require('./Bacckground/modern.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className='Modern'>Modern Luxe</h4>
            <p className='Moderndis'>Timeless, clean lines, and functional designs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "100vh" }}
            className="d-block w-100"
            src={require('./Bacckground/Miniimal.jpg')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className='Minimal'>Scandinavian Minimalism</h4>
            <p className='Minimaldis'>Elegant simplicity, natural materials, and a focus on functionality</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "100vh" }}
            className="d-block w-100"
            src={require('./Bacckground/LuxUrb.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4 className='Urban'>LuxUrban</h4>
            <p className='Urbandis'>A blend of sleek, sophisticated designs with luxurious materials and a classy urban vibe</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Seating'}>
              <Image src={require('./HomeCatgry/SeatingFurniture.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Seatings</p>
          </div>
          <div className='col-6'>
            <Link to={'/Bedroom'}>
              <Image src={require('./HomeCatgry/Bedroom.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Bedroom </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Dinning'}>
              <Image src={require('./HomeCatgry/Dinning.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Dinning</p>
          </div>
          <div className='col-6'>
            <Link to={'/Storage'}>
              <Image src={require('./HomeCatgry/Storage.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Storage</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Office'}>
              <Image src={require('./HomeCatgry/Office.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Office</p>
          </div>
          <div className='col-6'>
            <Link to={'/Outdoor'}>
              <Image src={require('./HomeCatgry/Outdoor.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Outdoor</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Kids'}>
              <Image src={require('./HomeCatgry/Kids.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Kids</p>
          </div>
          <div className='col-6'>
            <Link to={'/Entertainment'}>
              <Image src={require('./HomeCatgry/Entertainment.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Entertainment</p>
          </div>
        </div>
      </div>

      <footer className="text-light Copyright" >
        <Container >
          <Row className='Footer'>
            <Col md={4}>
              <h5 style={{marginTop:"30px"}}>About Us</h5>
              <img className='Logo' src={require('./NavBar/Logo/LogoF.png')} alt='Logo' />
            </Col>
            <Col md={4}>
              <ul style={{marginTop:"30px"}}>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Shipping Information</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul style={{marginTop:"30px"}}>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Copyright © 2023 UrbanLoom</li>
              </ul>
            </Col>
          </Row>
          <hr className="mt-4" />
          <Row>
            <Col>
              <p className="text-center">&copy; 2023 UrbanLoom.All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Home