import './App.css';
import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Partners from './components/parterns/Partners';
import Reviews from './components/reviews/Reviews';
import Services from './components/services/Services';
import { Route, Router, Routes } from 'react-router-dom'
import Packages from './pages/packages/Packages';
import BookForm from './pages/book/BookForm';
import Contact from './pages/contact/Contact';

function App() {
  return (


    <main>
      <NavBar />

      <Routes>
        <Route path='/' element={
          <>


            <Banner />
            <Services />
            <Doctors />
            <Partners />
            <Facilities />
            <Reviews />


          </>
        } />
      </Routes>


      <Routes>
        <Route path='/packages' element={<Packages />} />
        <Route path='/bookform' element={<BookForm />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </main>



  );
}

export default App;
