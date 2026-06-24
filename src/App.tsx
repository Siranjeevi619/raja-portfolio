import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-wrapper">
        <div className="container">
          <section id="home" className="spa-section">
            <Hero />
          </section>

          <section id="skills" className="spa-section">
            <Skills />
          </section>

          <section id="projects" className="spa-section">
            <Projects />
          </section>

          <section id="experience" className="spa-section">
            <Experience />
          </section>

          <section id="education" className="spa-section">
            <Education />
          </section>

          <section id="contact" className="spa-section">
            <Contact />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
