import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/Navbar';
import  Carousel  from './components/Carousel';
import  Card  from './components/Cards/Card/Card';
import { Routes, Route} from "react-router-dom";
import {Record} from './Stet/Record';
import {Ditaling} from './Stet/Ditaling';
import {Usual} from './Stet/Usual'
import {Scleaner} from './Stet/Scleaner';
import {Complex} from './Stet/Complex';
import {Regular} from './Stet/Regular';
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
    <Route path='/Stet/Record' element={<Record/>} />
    <Route path='/Stet/Usual' element={<Usual/>} />
    <Route path='/Stet/Ditaling' element={<Ditaling/>} />
    <Route path='/Stet/Scleaner' element={<Scleaner/>} />
    <Route path='/Stet/Complex' element={<Complex/>} />
    <Route path='/Stet/Regular' element={<Regular/>} />
    <Route path='/components/Login' element={<Login/>} />

   </Routes> 

   </>

  );
};

export default App;
