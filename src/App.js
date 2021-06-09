import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Briefdetails from './components/Briefdetails';
import Services from './components/Services';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
function App() {
  return (
    <div id='Home'>
      <Header/>
      <br/><br/>
      <br/>
      <Briefdetails/>
      <Aboutme/>
      <Education/>
      <Services/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
