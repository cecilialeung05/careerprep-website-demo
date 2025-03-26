import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/icons/placeholder.svg';  
import './LessonCard.scss'

export default function LessonCard({ title, description, link }) {
  return (
    <div className="lesson-card card">
      <div className="lesson-card__image-container">
        <img 
          src={placeholder} 
          alt={title} 
          className="lesson-card__image" 
        />
      </div>
      <h3 className="lesson-card__title">{title}</h3>
      <p className="lesson-card__description">{description}</p>
      <Link to={link} className="button button--primary lesson-card__button">
        Start Lesson
      </Link>
    </div>
  )
}
