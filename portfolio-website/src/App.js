import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import AboutMe from './components/about/AboutMe';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Copyright from './components/copyright/Copyright';
import BottomBtn from './components/bottombtn/BottomBtn';
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <BottomBtn />
      <Copyright />
    </>
  );
}

export default App;
