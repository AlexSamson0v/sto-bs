import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/Navbar';
import  Carousel  from './components/Carousel';
import  Card  from './components/Cards/Card/Card';
import { Routes, Route} from "react-router-dom";
import Record from './Conteiners/RecordPage/Record';
import {Ditaling} from './Conteiners/DitailingPage/Ditaling';
import {Usual} from './Conteiners/UsualPage/Usual'
import {Scleaner} from './Conteiners/SclinerPage/Scleaner';
import {Complex} from './Conteiners/ComplexPage/Complex';
import {Regular} from './Conteiners/RegularPage/Regular';
import { Navbar } from 'react-bootstrap';
import Login from './components/Login';

function App() {
  return (
    <>
   <NavBar/>
   <Carousel/>
   <Card/>
   <Routes> 
   <Route path='/' element={<Navbar/>} />
    <Route path='/Conteiners/RecordPage/Record' element={<Record/>} />
    <Route path='/Conteiners/UsualPage/Usual' element={<Usual/>} />
    <Route path='/Conteiners/DitailingPage/Ditaling' element={<Ditaling/>} />
    <Route path='/Conteiners/SclinerPage/Scleaner' element={<Scleaner/>} />
    <Route path='/Conteiners/ComplexPage/Complex' element={<Complex/>} />
    <Route path='/Conteiners/RegularPage/Regular' element={<Regular/>} />
    <Route path='/components/Login' element={<Login/>} />

   </Routes> 

   </>

  );
};

export default App;
