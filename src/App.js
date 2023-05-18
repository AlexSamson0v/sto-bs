import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/Navbar';
import  Carousel  from './components/Carousel';
import  Card  from './components/Cards/Card';
// import {BrowserRouter, Routes, Route, Router } from 'react-router-dom';



import {
  BrowserRouter, Routes, Route
  
} from "react-router-dom";



import {Main} from './Stet/Main';
import {Record} from './Stet/Record';
import {Ditaling} from './Stet/Ditaling';
import {Usual} from './Stet/Usual'
import {Scleaner} from './Stet/Scleaner';
import {Complex} from './Stet/Complex';
import {Regular} from './Stet/Regular';



function App() {
  return (
    <>
    <BrowserRouter>
   <NavBar/>
   <Carousel/>
   <Card/>
   <Routes> 
    <Route path='/' element={<Main/>} />
    <Route path='./Stet/Main' element={<Record/>} />
    <Route path='./Stet/Usual' element={<Usual/>} />
    <Route path='./Stet/Ditaling' element={<Ditaling/>} />
    <Route path='./Stet/Scleaner' element={<Scleaner/>} />
    <Route path='./Stet/Complex' element={<Complex/>} />
    <Route path='./Stet/Regular' element={<Regular/>} />
    
   </Routes> 
  </BrowserRouter>
   </>

  );
}

export default App;
