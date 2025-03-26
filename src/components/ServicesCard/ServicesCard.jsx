
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.scss'

export default function ServiceCard({ icon: Icon, title, price, description, link }) {
    return (
      <div className="service-card card">
        <div className="service-card__icon">
          {Icon && <Icon size={36} />}
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__price">{price}</p>
        <p className="service-card__description">{description}</p>
        <Link to={link} className="button button--primary service-card__button">
          Book Now
        </Link>
      </div>
    );
}

  
  