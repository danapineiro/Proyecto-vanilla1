// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
<Container fluid className="home-container">
      <Row>
        <Col>
          <div className="image-container">
          <img  src={process.env.PUBLIC_URL +'/img/img 1.png'}
            alt="" 
            className="home-image" />
            <div className="overlay-content">
              <p>Te ayudamos con tus trámites y además te acompañamos en el proceso.</p>
              <h1>Mundo Migrante Chile</h1>
              <Button className="submit-button">Enviar</Button>
            </div>
          </div>
        </Col>
      </Row>
 {/* Secciones alineadas horizontalmente */}
 <div className="sections-container">
        <Row className="justify-content-center">
          <Col md={4}>
            <div className="section text-center">
              <img  src={process.env.PUBLIC_URL +'/img/cohete.png'}
              alt="Rocket" 
              className="rocket-section-image" />
              <h2>Nacionalidad</h2>
              <p>Para personas que buscan adquirir la nacionalidad chilena u otros trámites relacionados.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="section text-center">
            <img  src={process.env.PUBLIC_URL +'/img/cohete.png'}
              alt="Rocket" 
              className="rocket-section-image" />
              <h2>Visa Temporal</h2>
              <p>Para personas extranjeras que tienen el propósito de establecerse en Chile hasta por 2 años.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="section text-center">
            <img  src={process.env.PUBLIC_URL +'/img/cohete.png'}
              alt="Rocket" 
              className="rocket-section-image" />
              <h2>Visa Definitiva</h2>
              <p>Para personas con Residencia Temporal vigente, que desean radicarse por tiempo indefinido en Chile.</p>
            </div>
          </Col>
        </Row>
      </div>
      {/* Imagen en el lado derecho a la mitad de la web */}
      <div className="right-image-container">
        <img  src={process.env.PUBLIC_URL +'/img/Ellipse 1.png'}
        alt="" 
        className="right-side-image" />
      </div>
      {/* Imagen en la parte inferior izquierda */}
      <div className="bottom-left-image-container">
      <img  src={process.env.PUBLIC_URL +'/img/Ellipse 2.png'}
        alt="" 
        className="bottom-left-image" />
      </div>
    </Container>
  );
}

export default Home;