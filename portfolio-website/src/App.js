import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import AboutMe from './components/about/AboutMe';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import Copyright from './components/copyright/Copyright';
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <BottomNavbar />
      <Copyright />
    </>
  );
}

export default App;
