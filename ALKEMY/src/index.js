import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom"
//import Login from "./components/Login";
import Listado from "./components/Listado";
import Contacto from './components/Contacto';
import Nav from './components/Nav';

import "./css/bootstrap.min.css"


import App from './App';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Nav/> 

    <Routes >

        <Route path='/' element={<App/>}/>
        <Route path="/listado" element={<Listado/>} />
        <Route path="/contacto" element={<Contacto/>} />

      </Routes>

      <Footer/>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

