import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
}
 

from 'mdb-react-ui-kit';
import './bludi.css';
import Footer from '../Conteiners/FooterPage/Footer'

function App() {
  return (
    <>
    <MDBContainer fluid className='bludi'>

      <MDBRow className='justify-content-center align-items-center m-5'>

        <MDBCard>
          <MDBCardBody className='px-4'>

            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Регистрация</h3>

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

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Дата Рождения' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Пол: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Женский' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Мужской' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Другой' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Номер Телефона' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>


            <MDBBtn className='mb-4' size='lg'>Предоставить на расмотрение</MDBBtn>

          </MDBCardBody>
        </MDBCard>

      </MDBRow>
    </MDBContainer>
    <Footer/>
    </>
  );
}

export default App;