import './TestimonialsPage.scss'

import React from "react";

const testimonialsData = [
  { name: "Jane Doe", position: "Data Scientist at Tech Co.", service: "Resume Review", quote: "The resume review service was incredibly helpful. The feedback I received helped me highlight my skills more effectively, and I landed my dream job within a month!" },
  { name: "John Smith", position: "ML Engineer at AI Startup", service: "Mock Interview", quote: "The mock interviews were incredibly realistic and challenging. The detailed feedback helped me identify my weak points and improve significantly. I aced my actual interviews!" },
  { name: "Sarah Lee", position: "Data Analyst at Finance Corp", service: "Bootcamp", quote: "The bootcamp was intense but incredibly valuable. The hands-on projects and personalized feedback accelerated my learning. Worth every penny!" },
  { name: "Michael Kim", position: "Data Engineer at E-commerce Inc.", service: "1-on-1 Coaching", quote: "The 1-on-1 coaching sessions transformed my approach to job searching. My coach provided tailored advice that helped me navigate the complex data science job market." },
  { name: "Rachel Park", position: "BI Analyst at Healthcare Ltd.", service: "Mock Interview", quote: "After struggling with interviews for months, the mock interview service gave me the confidence and skills I needed. I received two job offers within weeks!" },
  { name: "Alex Thompson", position: "Research Scientist at University", service: "Resume Review", quote: "The resume review completely transformed my resume. The expert feedback helped me showcase my projects and skills in a way that resonated with hiring managers." },
  { name: "Brian Wilson", position: "Product Data Scientist at SaaS Co.", service: "Bootcamp", quote: "The bootcamp curriculum was comprehensive and up-to-date with industry standards. The instructors were knowledgeable and supportive throughout the program." },
  { name: "Christina Liu", position: "Analytics Manager at Retail Inc.", service: "1-on-1 Coaching", quote: "My coach helped me identify and address skill gaps in my data science knowledge. Their guidance was instrumental in my successful career transition." },
  { name: "David Thomas", position: "Data Science Lead at Consulting Firm", service: "Mock Interview", quote: "The mock interview revealed weaknesses in my technical explanations that I wasn't aware of. After addressing these issues, I felt much more confident in real interviews." },
];

export default function TestimonialsPage() {
  return (
    <div className="container">
      <div className="testimonials-page__header">
        <h1 className="testimonials-page__title">Testimonials</h1>
        <p className="testimonials-page__description">
          See what our clients have to say about their experience with our services
        </p>
      </div>

      <div className="testimonials-page__grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="card testimonial">
            <div className="testimonial__header">
              <div className="testimonial__avatar">
                {testimonial.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="testimonial__info">
                <h4 className="testimonial__name">{testimonial.name}</h4>
                <p className="testimonial__position">{testimonial.position}</p>
              </div>
            </div>
            <div className="testimonial__rating">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`testimonial__star ${i < 4 ? "testimonial__star--filled" : "testimonial__star--empty"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="testimonial__quote">{testimonial.quote}</p>
            <p className="testimonial__service">
              {testimonial.service} • {["January", "February", "March", "April", "May", "June", "July", "August", "September"][index % 9]} 2023
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
