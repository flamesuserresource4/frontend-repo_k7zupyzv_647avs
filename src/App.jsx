import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Aarav Sharma. Built with love, React, and a sprinkle of 3D.
        </div>
      </footer>
    </div>
  );
}

export default App;
