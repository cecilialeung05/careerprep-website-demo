import ServiceCard from "../ServicesCard/ServicesCard"
import { FileText, Users, Video, BookOpen } from "lucide-react"

export default function ServicesOverview() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section__title section__title--center">Our Services</h2>
          <p className="section__subtitle section__subtitle--center">
            Expert guidance to help you succeed in your data science career journey
          </p>
  
          <div className="grid grid--4-cols">
            <ServiceCard
              icon={FileText}
              title="Resume Review"
              price="$99 / $149"
              description="Get expert feedback on your resume to stand out to recruiters and hiring managers."
              link="/services/resume-review"
            />
            <ServiceCard
              icon={Users}
              title="1-on-1 Coaching"
              price="Custom Pricing"
              description="Personalized guidance tailored to your specific career goals and challenges."
              link="/services/coaching"
            />
            <ServiceCard
              icon={Video}
              title="Mock Interviews"
              price="$75"
              description="Practice with professionals and get detailed feedback to improve your interview skills."
              link="/services/mock-interviews"
            />
            <ServiceCard
              icon={BookOpen}
              title="Bootcamps"
              price="$499"
              description="Intensive training programs to rapidly develop your data science skills and knowledge."
              link="/services/bootcamps"
            />
          </div>
        </div>
      </section>
    )
  }
  
  