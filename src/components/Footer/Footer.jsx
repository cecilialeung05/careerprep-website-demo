import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__column">
            <h3 className="footer__logo">DataCareerPrep</h3>
            <p className="footer__description">Empowering careers through accessible education and expert services.</p>
            <div className="footer__social">
              <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@yourwebsite.com" className="footer__social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">Home</Link>
              </li>
              <li>
                <Link to="/lessons" className="footer__link">Lessons</Link>
              </li>
              <li>
                <Link to="/blog" className="footer__link">Blog</Link>
              </li>
              <li>
                <Link to="/services" className="footer__link">Services</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer__column">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__links">
              <li>
                <Link to="/services/resume-review" className="footer__link">Resume Review</Link>
              </li>
              <li>
                <Link to="/services/coaching" className="footer__link">1-on-1 Coaching</Link>
              </li>
              <li>
                <Link to="/services/mock-interviews" className="footer__link">Mock Interviews</Link>
              </li>
              <li>
                <Link to="/services/bootcamps" className="footer__link">Bootcamps</Link>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__heading">Newsletter</h3>
            <p className="footer__description">Get updates on new lessons and services.</p>
            <form className="footer__newsletter">
              <input 
                type="email" 
                placeholder="Your email" 
                className="footer__newsletter-input" 
                required 
              />
              <button type="submit" className="button button--primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} DataCareerPrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
