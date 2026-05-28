import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Cloud } from './components/sections/Cloud';
import { Credentials } from './components/sections/Credentials';
import { Contact, Footer } from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="divider" />
        <Experience />
        <Projects />
        <Cloud />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
