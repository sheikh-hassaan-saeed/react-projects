import './App.css';
import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import NavBar from './components/navbar/NavBar';
import Partners from './components/parterns/Partners';
import Services from './components/services/Services';

function App() {
  return (
    <>

      <NavBar />
      <Banner />
      <Services />
      <Doctors />
      <Partners />
      <Facilities />
    </>
  );
}

export default App;
