import './App.css';
import Banner from './components/banner/Banner';
import Doctors from './components/doctors/Doctors';
import Facilities from './components/facilities/Facilities';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Partners from './components/parterns/Partners';
import Reviews from './components/reviews/Reviews';
import Services from './components/services/Services';
import { Route, Routes, useLocation } from 'react-router-dom';
import Packages from './pages/packages/Packages';
import BookForm from './pages/book/BookForm';
import Contact from './pages/contact/Contact';
import Profile from './components/profile/Profile';
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <PageWrapper>
            <Banner />
            <Services />
            <Doctors />
            <Partners />
            <Facilities />
            <Reviews />
          </PageWrapper>
        } />

        <Route path='/packages' element={<PageWrapper><Packages /></PageWrapper>} />
        <Route path='/bookform' element={<PageWrapper><BookForm /></PageWrapper>} />
        <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path='/profile' element={<PageWrapper><Profile /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}


function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <main>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </main>
  );
}

export default App;
