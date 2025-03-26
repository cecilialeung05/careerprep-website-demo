import { useState } from "react"
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react"
import './Navbar.scss'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          DataCareerPrep
        </Link>

        <nav className="navbar__nav">
          <Link to="/HomePage" className="navbar__link">
            Home
          </Link>
          <Link to="/LessonsPage" className="navbar__link">
            Lessons
          </Link>
          <Link to="/BlogPage" className="navbar__link">
            Blog
          </Link>
          <div className="navbar__dropdown">
            <button className="navbar__dropdown-button">Services</button>
            <div className="navbar__dropdown-content">
              <Link to="/services/resume-review" className="navbar__dropdown-link">
                Resume Review
              </Link>
              <Link to="/services/coaching" className="navbar__dropdown-link">
                1-on-1 Coaching
              </Link>
              <Link to="/services/mock-interviews" className="navbar__dropdown-link">
                Mock Interviews
              </Link>
              <Link to="/services/bootcamps" className="navbar__dropdown-link">
                Bootcamps
              </Link>
            </div>
          </div>
          <Link to="/signup" className="button button--primary">
            Sign Up
          </Link>
        </nav>

        <button className="navbar__mobile-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile-menu ${isMenuOpen ? "navbar__mobile-menu--open" : ""}`}>
        <div className="navbar__mobile-container">
          <Link to="/" className="navbar__mobile-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/lessons" className="navbar__mobile-link" onClick={toggleMenu}>
            Lessons
          </Link>
          <Link to="/blog" className="navbar__mobile-link" onClick={toggleMenu}>
            Blog
          </Link>
          <div className="navbar__mobile-services">
            <h3 className="navbar__mobile-services-title">Services</h3>
            <Link to="/services/resume-review" className="navbar__mobile-services-link" onClick={toggleMenu}>
              Resume Review
            </Link>
            <Link to="/services/coaching" className="navbar__mobile-services-link" onClick={toggleMenu}>
              1-on-1 Coaching
            </Link>
            <Link to="/services/mock-interviews" className="navbar__mobile-services-link" onClick={toggleMenu}>
              Mock Interviews
            </Link>
            <Link to="/services/bootcamps" className="navbar__mobile-services-link" onClick={toggleMenu}>
              Bootcamps
            </Link>
          </div>
          <Link to="/signup" className="button button--primary" onClick={toggleMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}
