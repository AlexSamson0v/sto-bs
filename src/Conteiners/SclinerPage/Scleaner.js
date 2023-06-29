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

function Scleaner() {
  return (
    <> 
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src="https://img.freepik.com/free-photo/beautiful-car-at-interior-clean-up-service_23-2149212255.jpg?w=996&t=st=1688059141~exp=1688059741~hmac=19bad6fb8733aa98f8388bf9fd063a83f07a53a4ca499882c83f6971e83b958c"
              position="top"
              alt=""
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>Полная мойка</MDBCardTitle>
                <p className="text-muted mb-4">В чистоте и не  обиде</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>стандартная мойка + пылесос салона + протирка панели приборов, обивки дверей + чистка стекол</span>
                  <span>₽600</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>2 класс авто</span>
                  <span>₽650</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>3 класс авто</span>
                  <span>₽700</span>
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

export default Scleaner;