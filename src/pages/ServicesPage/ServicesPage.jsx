import React from "react";
import { FileText, Users, Video, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import './ServicesPage.scss'

export default function ServicesPage() {
  return (
    <div className="container">
      <div className="services__header">
        <h1 className="services__title">Services</h1>
        <p className="services__description">
          Expert services for career growth and professional development in data science
        </p>
      </div>

      <div className="services__grid">

        {/* Resume Review */}
        <div className="card service-card">
          <div className="service-card__icon">
            <FileText size={48} />
          </div>
          <h2 className="service-card__title">Resume Review</h2>
          <div className="service-card__price-container">
            <span className="service-card__price">$99 / $149</span>
            <span className="service-card__badge">Most Popular</span>
          </div>
          <p className="service-card__description">
            Get expert feedback on your resume to stand out to recruiters and hiring managers. 
            Our data science professionals will review your resume and provide detailed feedback on how to improve it.
          </p>
          <Link to="/services/resume-review" className="button button--primary service-card__button">
            Book Now
          </Link>
        </div>

        <div className="card service-card">
          <div className="service-card__icon">
            <Users size={48} />
          </div>
          <h2 className="service-card__title">1-on-1 Coaching</h2>
          <div className="service-card__price-container">
            <span className="service-card__price">Custom Pricing</span>
          </div>
          <p className="service-card__description">
            Personalized guidance tailored to your specific career goals and challenges.
          </p>
          <Link to="/services/coaching" className="button button--primary service-card__button">
            Book Now
          </Link>
        </div>

        {/* Mock Interviews */}
        <div className="card service-card">
          <div className="service-card__icon">
            <Video size={48} />
          </div>
          <h2 className="service-card__title">Mock Interviews</h2>
          <div className="service-card__price-container">
            <span className="service-card__price">$75</span>
          </div>
          <p className="service-card__description">
            Practice with professionals and get detailed feedback to improve your interview skills.
          </p>
          <Link to="/services/mock-interviews" className="button button--primary service-card__button">
            Book Now
          </Link>
        </div>

        <div className="card service-card">
          <div className="service-card__icon">
            <BookOpen size={48} />
          </div>
          <h2 className="service-card__title">Bootcamps</h2>
          <div className="service-card__price-container">
            <span className="service-card__price">$499</span>
          </div>
          <p className="service-card__description">
            Intensive training programs to rapidly develop your data science skills and knowledge.
          </p>
          <Link to="/services/bootcamps" className="button button--primary service-card__button">
            Book Now
          </Link>
        </div>

      </div>

      <div className="services__cta">
        <h2 className="services__cta-title">Ready to Advance Your Career?</h2>
        <p className="services__cta-description">
          Book a service today or contact us for more information about how we can help you achieve your career goals.
        </p>
        <div className="services__cta-buttons">
          <Link to="/contact" className="button button--primary">Contact Us</Link>
          <a href="mailto:contact@yourwebsite.com" className="button button--secondary">Email Us</a>
        </div>
      </div>
    </div>
  );
}
