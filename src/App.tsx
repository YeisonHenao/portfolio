import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Technologies from './components/sections/Technologies/Technologies';
import ParticlesBackground from './components/layout/ParticlesBackground/ParticlesBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
