import Home from '../../components/Home/Home'
import './HomePage.scss'

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container text-center">
          <h1 className="section__title">Welcome to Data Science Career Prep</h1>
          <p className="section__subtitle">Land your data science dream job with expert coaching and resources.</p>
        </div>
      </section>
      <Home/>
    </main>
  )
}
