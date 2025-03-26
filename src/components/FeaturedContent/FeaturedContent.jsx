import React from 'react';
import LessonCard from '../LessonCard/LessonCard';
import placeholder from '../../assets/icons/placeholder.svg';  

export default function FeaturedContent() {
    return (
      <section className="section section--muted">
        <div className="container">
          <h2 className="section__title section__title--center">Explore Free Resources</h2>
          <p className="section__subtitle section__subtitle--center">
            Access our library of free lessons and articles to boost your data science skills
          </p>
  
          <div className="grid grid--3-cols">
            <LessonCard
              image={placeholder}
              title="Python for Data Science"
              description="Master the fundamentals of Python programming for data analysis and visualization."
              link="/lessons/python-for-data-science"
            />
            <LessonCard
              image={placeholder}
              title="SQL Interview Questions"
              description="Practice common SQL interview questions with step-by-step solutions."
              link="/lessons/sql-interview-questions"
            />
            <LessonCard
              image={placeholder}
              title="Machine Learning Basics"
              description="Learn the core concepts of machine learning algorithms and when to use them."
              link="/lessons/machine-learning-basics"
            />
          </div>
        </div>
      </section>
    )
}
