import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './landigPage/home/HomePage';
import Navbar from './landigPage/Navbar';
import Footer from './landigPage/Footer';
import LocationPage from './landigPage/findlocations/LocationPage';
import PageNotFound from './landigPage/PageNotFound';
import Signup from './auth/Signup';
import Login from './auth/Login';
import LocationDetails from './landigPage/findlocations/LocationDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/locations' element={<LocationPage/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/location/:id" element={<LocationDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


