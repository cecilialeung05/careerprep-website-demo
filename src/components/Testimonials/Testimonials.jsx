import './Testimonials.scss';

export default function Testimonials() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section__title section__title--center">What Clients Say</h2>
          <p className="section__subtitle section__subtitle--center">
            Hear from professionals who have advanced their careers with our help
          </p>
  
          <div className="grid grid--3-cols">
            <div className="testimonial card">
              <div className="testimonial__header">
                <div className="testimonial__avatar">JD</div>
                <div className="testimonial__info">
                  <h4 className="testimonial__name">Jane Doe</h4>
                  <p className="testimonial__position">Data Scientist at Tech Co.</p>
                </div>
              </div>
              <p className="testimonial__quote">
                "The resume review service was incredibly helpful. The feedback I received helped me highlight my skills
                more effectively, and I landed my dream job within a month!"
              </p>
            </div>
  
            <div className="testimonial card">
              <div className="testimonial__header">
                <div className="testimonial__avatar">JS</div>
                <div className="testimonial__info">
                  <h4 className="testimonial__name">John Smith</h4>
                  <p className="testimonial__position">ML Engineer at AI Startup</p>
                </div>
              </div>
              <p className="testimonial__quote">
                "The mock interviews were incredibly realistic and challenging. The detailed feedback helped me identify
                my weak points and improve significantly. I aced my actual interviews!"
              </p>
            </div>
  
            <div className="testimonial card">
              <div className="testimonial__header">
                <div className="testimonial__avatar">SL</div>
                <div className="testimonial__info">
                  <h4 className="testimonial__name">Sarah Lee</h4>
                  <p className="testimonial__position">Data Analyst at Finance Corp</p>
                </div>
              </div>
              <p className="testimonial__quote">
                "The bootcamp was intense but incredibly valuable. The hands-on projects and personalized feedback
                accelerated my learning. Worth every penny!"
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  