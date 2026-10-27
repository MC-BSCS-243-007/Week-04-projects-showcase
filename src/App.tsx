import { AboutShowcase } from './components/AboutShowcase'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectsPage } from './components/ProjectsPage'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProjectsPage />
        <AboutShowcase />
      </main>
      <Footer />
    </>
  )
}
