import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,

}
from 'mdb-react-ui-kit';

import Dates from '../Data/Dates';
import Time from '../Time/Time';
import Footer from '.././FooterPage/Footer';

function Record() {
  return (
    <>
    <MDBContainer fluid className='bg-dark' style={{ paddingTop: '2rem'}}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://img.freepik.com/free-photo/close-up-on-car-care-process_23-2149193571.jpg?w=740&t=st=1687875706~exp=1687876306~hmac=48e5685b47d47c71340e168412e34d86d0683a7212bc96a58534aec7a5b8e4db' alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>
 
                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Записаться</h3>

                  <MDBRow>
                
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Имя' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Фамилия' size='lg' id='form2' type='text'/>
                    </MDBCol>
                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Отчество' size='lg' id='form2' type='text'/>
                    </MDBCol>
                  </MDBRow>

              



                 
                  <MDBInput wrapperClass='mb-4' label=' Ваш Email' size='lg' id='form6' type='text'/>
                  <Dates/>
                  <Time/>
                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Сбросить</MDBBtn>
                    <MDBBtn className='ms-2' color='blue' size='lg'>Отправить</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    <Footer/>
</>
  );
}

export default Record;
