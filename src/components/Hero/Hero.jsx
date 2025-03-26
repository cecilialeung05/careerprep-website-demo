import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

export default function Hero() {
  return (
    <section className="hero gradient-bg">
      <div className="hero__container">
        <h1 className="hero__title">Land Your Data Science Dream Job</h1>
        <p className="hero__subtitle">Interview prep with expert lessons and personalized coaching</p>
        
        <div className="hero__buttons">
          <Link to="/LessonsPage" className="button button--white">
            Explore Free Lessons
          </Link>
          
          <Link to="/ServicesPage" className="button button--secondary">
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
