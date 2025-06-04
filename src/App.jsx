

import './App.css'
import NavBar from './components/NavBar.jsx'
import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Work from './components/Work.jsx'
import Projects from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/ContactSection.jsx'

function App() {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30 z-[-1]"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600 rounded-full blur-2xl opacity-30 z-[-1]"></div>
      
      {/* Main content */}
      <NavBar />
      <HeroSection />
      <About sectionId='about' />
      <Work sectionId='work' />
      <Projects sectionId='projects' />
      <Skills sectionId='skills' />
      <Education sectionId='education' />
      <Contact sectionId='contact' />
    </div>
  );
 }

export default App
