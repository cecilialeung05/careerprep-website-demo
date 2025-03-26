
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage/HomePage';
import LessonsPage from './pages/LessonsPage/LessonsPage';

import BlogPage from './pages/BlogPage/BlogPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage';
import FAQPage from './pages/FAQPage/FAQPage';
import Footer from './components/Footer/Footer';

import './App.scss'
import './main.scss';


function App() {

  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/LessonsPage" element={<LessonsPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/FAQPage" element={<FAQPage />} />
      </Routes>
      <Footer />
    </Router>
   
    </>
  )
}

export default App
