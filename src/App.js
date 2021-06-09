import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Services from './components/Services';
function App() {
  return (
    <div>
        <div id="preloader">
          <div id="loader" className="dots-fade">
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <Header/>
      <Contact/>
      <Experiences/>
      <Services/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
