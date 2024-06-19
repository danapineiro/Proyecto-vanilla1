import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <div className="header-container">
      <h6>Soluciones a tus Trámites Migratorios</h6>
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL +'/img/logo-mundo-migrante (1).png'}
            alt="Mundo Migrante Chile"
            className="d-inline-block align-top"
            
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">
            <a href="#home" className="custom-link">Inicio</a>
              </Nav.Link>
            <div className="reg-verde-container">
              <div className="reg-verde"></div> {/* Rectángulo verde */}
            </div>
            <Nav.Link href="#section2">Sección 2</Nav.Link>
            <Nav.Link href="#section2">Sección 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


