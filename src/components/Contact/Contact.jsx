import { Link } from "react-router-dom";
import { Mail } from "lucide-react"
import './Contact.scss'

export default function Contact() {
    return (
      <section className="section">
        <div className="container">
          <div className="contact">
            <h2 className="section__title section__title--center">Get in Touch</h2>
            <div className="contact__email">
              <Mail className="contact__email-icon" size={24} />
              <a href="mailto:contact@yourwebsite.com" className="contact__email-link">
                contact@yourwebsite.com
              </a>
            </div>
            <p className="contact__text">
              Have questions about our services or need personalized advice? We're here to help! Send us an email and
              we'll get back to you as soon as possible.
            </p>
            <Link href="/contact" className="button button--primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  