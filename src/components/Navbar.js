import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Clock from './Clock/Clock';
// import Toggle from './Toggle/Toggle';

function BasicExample() {
  return (
    <>
  
    <Navbar bg="primary" variant="dark" expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand href="/">STO-Ditailen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto"  >
            <Nav.Link href="/" >  Главная  </Nav.Link>
            <Nav.Link href="/Conteiners/RecordPage/Record">  Записаться </Nav.Link>
            <NavDropdown title="Услуги" id="basic-nav-dropdown">

              <NavDropdown.Item href="#action/3.1"> <Link to="/Conteiners/UsualPage/Usual">Обычная мойка</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <Link to="/Conteiners/ScleanerPage/Scleaner">Мойка + пылесос</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to="/Conteiners/RegularPage/Regular">Наненесение воска</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <Link to="/Conteiners/ComplexPage/Complex">Комплексная мойка</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6"> <Link to="/Conteiners/EnginePage/Engine">Мойка двигателяг</Link></NavDropdown.Item>
<NavDropdown.Item href="#action/3.5"> <Link to="/Conteiners/DitalingPage/Ditaling">Детайлинг</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                тел:+7(960)-015-01-50
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav> 
           <Button variant='primary' className='mr-2'> <Nav.Link href="/components/Register">  Зарегистрироваться </Nav.Link>  </Button>

           <Button variant='primary' className='mr-2'> <Nav.Link href="/components/Login">  Войти </Nav.Link>  </Button>
         <Clock/> 
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;