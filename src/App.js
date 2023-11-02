import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Bio from './components/Bio';
import TechTable from './components/TechTable';
import Project from './components/Project';
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import './App.css';



function App() {
  return (
    <>
    <Nav />
      <section className='hero'>
        <Bio />
        <Sidebar />
        <TechTable />
      </section>
      <section className='projects'>
        <h2>My Projects</h2>
        <Project 
          name='Ghostbuds'
          description='lorem ipsum'
          imgSrc=""
          imgAlt="attack of the clones" 
          demoLink="https://ghostbuds.cyclic.app/"
          githubLink="https://github.com/bumpylumps/ghostBuds"
        />
          
        <Project 
          name='Quite Unusual Podcast Site'
          description='lorem ipsum'
          imgSrc=""
          imgAlt="attack of the clones"
          demoLink="https://www.quiteunusualpod.com/" 
          githubLink="https://github.com/bumpylumps/quiteUnusual"
        />
        
        <Project 
          name='Knowledge World'
          description='lorem ipsum'
          imgSrc=""
          imgAlt="attack of the clones" 
          demoLink="https://knowledge-world.cyclic.app/"
          githubLink="https://github.com/BigSuggs72/libraryauth"
        />
      </section>
      <section>
        <h2>Contact Me</h2>
        <ContactForm />

      </section>
      <Footer />
    </>
  );
}

export default App;
