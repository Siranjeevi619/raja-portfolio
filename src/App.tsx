import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

type View = 'home' | 'projects' | 'experience' | 'education';

function App() {
  const [view, setView] = useState<View>('home');
  const setViewSafe = (v: string) => setView(v as View);

  const renderView = () => {
    switch (view) {
      case 'projects':    return <Projects />;
      case 'experience':  return <Experience />;
      case 'education':   return <Education />;
      default:            return null;
    }
  };

  return (
    <div className="app-shell">
      <Navbar currentView={view} setView={setViewSafe} />

      <main className="page-wrapper">
        <div className="container">
          <div className="view-enter" key={view}>
            {view !== 'home' && (
              <button className="back-btn" onClick={() => setView('home')}>
                <ArrowLeft size={15} />
                back
              </button>
            )}
            {view === 'home' ? <><Hero setView={setViewSafe} /><Skills /></> : renderView()}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
