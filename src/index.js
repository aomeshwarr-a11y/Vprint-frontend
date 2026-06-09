import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './landigPage/home/HomePage';
import Navbar from './landigPage/Navbar';
import Footer from './landigPage/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


