import './FAQPage.scss'
import React from 'react';

export default function FAQPage() {
  return (
    <div className="container">
      <div className="faq__header">
        <h1 className="faq__title">Frequently Asked Questions</h1>
        <p className="faq__description">
          Find answers to common questions about our services and resources
        </p>
      </div>

      <div className="faq__content">
        <div className="faq__sections">

          <FAQSection title="General Questions" questions={[
            {
              question: "How do I access the free lessons?",
              answer: "You can access all our free lessons by navigating to the Lessons page. No sign-up is required to view and use the free content, though creating an account will help you track your progress."
            },
            {
              question: "Do I need to create an account to use your services?",
              answer: "Yes, you'll need to create an account to book and use our paid services. This helps us personalize your experience and keep track of your bookings and progress."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for our services. Payment is processed securely through our payment provider."
            }
          ]} />

          <FAQSection title="Resume Review" questions={[
            {
              question: "What's the difference between the $99 and $149 resume review options?",
              answer: "The $99 option includes detailed written feedback on your resume. The $149 option includes the same feedback plus a 30-minute call with a resume expert to discuss the feedback and answer any questions you may have."
            },
            {
              question: "How long does it take to receive my resume review?",
              answer: "You'll receive your feedback within 3 business days of submitting your resume. If you've chosen the call option, you can schedule it after receiving the feedback."
            },
            {
              question: "Can I request revisions to the feedback?",
              answer: "If you have specific questions about the feedback, you can reply to the feedback email and we'll clarify any points within 2 business days."
            }
          ]} />

          <FAQSection title="1-on-1 Coaching" questions={[
            {
              question: "How is the coaching pricing determined?",
              answer: "Pricing is customized based on your specific needs, goals, and duration of coaching. After an initial consultation, we'll provide a personalized quote."
            },
            {
              question: "How often do coaching sessions take place?",
              answer: "The frequency of sessions is flexible. Most clients opt for weekly or bi-weekly sessions, but we can accommodate different schedules."
            },
            {
              question: "Can I change coaches if it's not a good fit?",
              answer: "Yes, if you feel your coach isn't the right fit, you can request a change. We want you to have the best experience and results."
            }
          ]} />

          <FAQSection title="Mock Interviews" questions={[
            {
              question: "How realistic are the mock interviews?",
              answer: "Our mock interviews simulate real-world data science interview scenarios with experienced professionals."
            },
            {
              question: "What types of questions will be asked?",
              answer: "Interviews include technical (SQL, Python, statistics, machine learning) and behavioral questions. Focus areas can be customized."
            },
            {
              question: "How do I receive feedback after the mock interview?",
              answer: "You'll receive immediate verbal feedback followed by detailed written feedback within 24 hours."
            }
          ]} />

          <FAQSection title="Bootcamps" questions={[
            {
              question: "What's the time commitment for the bootcamp?",
              answer: "The bootcamp runs for 4 weeks with approximately 10-15 hours of commitment per week, including live sessions, assignments, and projects."
            },
            {
              question: "What if I miss a live session?",
              answer: "All live sessions are recorded. You can catch up with the recordings if you miss a session."
            },
            {
              question: "Is there a refund policy for the bootcamp?",
              answer: "We offer a full refund if you withdraw within the first week. After that, refunds are prorated based on the portion completed."
            }
          ]} />

        </div>
      </div>
    </div>
  );
}


function FAQSection({ title, questions }) {
  return (
    <div className="card faq__section">
      <h3 className="faq__section-title">{title}</h3>
      <div className="faq__questions">
        {questions.map((q, index) => (
          <div key={index} className="faq__question">
            <h4 className="faq__question-title">{q.question}</h4>
            <p className="faq__question-answer">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
