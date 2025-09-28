import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import AboutMe from './components/about/AboutMe';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
