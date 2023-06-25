import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import Record from './Conteiners/RecordPage/Record';
import {Ditaling} from './Conteiners/DitailingPage/Ditaling';
import {Usual} from './Conteiners/UsualPage/Usual'
import {Scleaner} from './Conteiners/SclinerPage/Scleaner';
import {Complex} from './Conteiners/ComplexPage/Complex';
import {Regular} from './Conteiners/RegularPage/Regular';
import Register from './components/Register';
import Engine from './Conteiners/EnginePage/Engine'
import { Home } from './Conteiners/HomePage/Home';
import Login from './components/Login';



function App() {
  return (
    <>
   <NavBar/>
   {/* <Card/> */}
   <Routes> 

    <Route path='/' element={<Home/>} />
    <Route path='/Conteiners/RecordPage/Record' element={<Record/>} />
    <Route path='/Conteiners/UsualPage/Usual' element={<Usual/>} />
    <Route path='/Conteiners/DitailingPage/Ditaling' element={<Ditaling/>} />
    <Route path='/Conteiners/SclinerPage/Scleaner' element={<Scleaner/>} />
    <Route path='/Conteiners/ComplexPage/Complex' element={<Complex/>} />
    <Route path='/Conteiners/RegularPage/Regular' element={<Regular/>} />
    <Route path='/components/Register' element={<Register/>} />
    <Route path='/Conteiners/EnginePage/Engine' element={<Engine/>} />

    <Route path='/components/Login' element={<Login/>} />

   </Routes> 

   </>

  );
};

export default App;
