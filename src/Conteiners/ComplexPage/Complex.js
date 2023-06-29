import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from '.././FooterPage/Footer';
import Tabl from '../TablPage/Tabl';

function Complex() {
  return (
    <> 
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src="https://img.freepik.com/free-photo/beautiful-car-at-washing-service_23-2149212209.jpg?w=996&t=st=1688056217~exp=1688056817~hmac=04ce79e6ed3e8bb5e98106c9e38a271dd5ddd67e0c36e76f6a00197694271313"
              position="top"
              alt=""
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>Бесконтактныя мойка</MDBCardTitle>
                <p className="text-muted mb-4">Кузов обещает долго жить</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Техническая мойка (наружная мойка с применением пены)</span>
                  <span>₽400</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>2 класс авто</span>
                  <span>₽450</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>3 класс авто</span>
                  <span>₽500</span>
                </div>
              </div>
              < Link to="/Conteiners/RecordPage/Record">
                   <Button  variant="primary">Записаться</Button>
                  </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Tabl/>
    <Footer/>
    </>
  );
}

export default Complex;