import './App.css';
import About from './comporents/About';
import ApplicationSection from './comporents/ApplicationSection';
import Entretien from './comporents/Entretien';
import Hero from './comporents/Hero';

import logso from './Union.png';


function App() {
  return (
    <div className='App'>
      <img class="union1" src={logso} alt="logo" />
      <img class="union2" src={logso} alt="logo" />
      <img class="union3" src={logso} alt="logo" />

      <Hero/>
      <About />
      <ApplicationSection/>
      <Entretien/>
    </div>
  );
}

export default App;
