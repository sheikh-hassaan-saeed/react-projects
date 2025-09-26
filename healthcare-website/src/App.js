import './App.css';
import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Partners from './components/parterns/Partners';
import Reviews from './components/reviews/Reviews';
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
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
