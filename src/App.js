import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Header/>
      <Contact/>
      <Services/>
      <Projects/>
      <Experiences/>
      <Footer/>
    </div>
  );
}

export default App;
