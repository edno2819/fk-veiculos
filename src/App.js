
import Header from './components/Header';
import PainelMain from './components/PainelMain'
// import Carrosel from './components/CarroselPhotos/Carrosel'
import AvalibleCars from './components/AvaliableCars/AvalibleCars'
import Contact from './components/Contact'
import Footer from './components/Footer'

// import CoverCarrosel from './components/cover'


import './App.scss';

function App() {
  return (
    <div className="App">
      <Header /> 
      <PainelMain />
      <hr/>
      <AvalibleCars />
      <hr/>
      {/* <Carrosel /> */}
      <hr/>
      <Contact />
      <Footer />


      {/* <CoverCarrosel /> */}


      {/* <div class="loading__wrapper_off">
        <div class="loader--text">Loading...</div>
        <div class="loader">
          <span></span>
        </div>
      </div> */}

    </div>

  );
}

export default App;
