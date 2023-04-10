import './App.css';
import About from './comporents/About';
import ApplicationSection from './comporents/ApplicationSection';
import Entretien from './comporents/Entretien';
import Hero from './comporents/Hero';

function App() {
  return (
    <div className='App'>
      <Hero/>
      <About />
      <ApplicationSection/>
      <Entretien/>
    </div>
  );
}

export default App;
